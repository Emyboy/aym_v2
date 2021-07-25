// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import request from 'request';
import cheerio from 'cheerio';

interface EachPost {
    name: string;
    category: string;
    image_url?: string;
    content_type: string;
    description: string;
}



export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    try {
        const keyword: any = req.query.keyword;
        // console.log('KEYWORK --', keyword);
        const url = `${process.env.SCRAPE_URL}/search?t=${keyword.replace(' ', '+')}`;
        // console.log('URL --', url);

        request(url, (err, response: any, html) => {
            if (!err) {
                const $ = cheerio.load(html);
                const list: any[] = [];
                $('.search-results article').each((i, el) => {
                    const name: string = $(el).find('.info h3').text().replace(/\s\s+/g, '');
                    const description: string = $(el).find('.info .excerpt').text().replace(/\s\s+/g, '');
                    const image_url = $(el).find('.thumbnail img').attr('src');
                    list.push({ name, image_url, content_type: 'music', description });

                })
                res.status(200).send(list);
            } else {
                res.status(500).json('error')
            }
        })
    } catch (error) {
        res.status(500).json(error)
    }
}
