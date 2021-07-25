// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import request from 'request';
import cheerio from 'cheerio';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    try {
        const {
            category,
            sub_category,
            slug
        } = req.query;

        const renderClassName = (category: string) => {
            switch (category) {
                case 'videos':
                    return '.video-entry'
                case 'music':
                    return '.audio-entry'
                case 'posts':
                    return 'main'
                default:
                    break;
            }
        }
        const url = `${process.env.SCRAPE_URL}/${category}/${sub_category}/${slug}`;
        console.log('URL --', url);
        console.log('CLASSNAME ---', renderClassName(category as string));
        request(url, (err, response: any, html) => {
            if (!err) {
                const $ = cheerio.load(html);
                const list: any[] = [];
                $(renderClassName(category as string)).each((i, el) => {
                    list.push({
                        title: $(el).find('h1').text(),
                        image_url: $(el).find('article figure img').attr('src'),
                        description: $(el).find('article p').text(),
                        iframe: $(el).find('.video-player-con .video-player iframe').attr('src'),
                        downloadUrl: process.env.SCRAPE_URL+$(el).find('.download-block-con .download-block .db-main .db-one a').attr('href'),
                    });
                });
                console.log('LIST --', list)
                res.status(200).send(list);
            } else {
                res.status(500).json('error')
            }
        })
    } catch (error) {
        res.status(500).json(error)
    }
}
