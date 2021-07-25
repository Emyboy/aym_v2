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
    link: string;
}



export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const category: any = req.query.category;
        const url = `${process.env.SCRAPE_URL}/videos`;
    
        request(url, (err, response: any, html) => {
            if (!err) {
                const $ = cheerio.load(html);
                const list: EachPost[] = [];
                $('.video-files article').each((i, el) => {
                    const name: string = $(el).find('.info h2').text().replace(/\s\s+/g, '');
                    const link: string[1] = $(el).find('.info h2 a').attr('href').split(process.env.SCRAPE_URL)[1];
                    const category: string = $(el).find('.info .category').text().replace(/\s\s+/g, '');
                    const image_url = $(el).find('.thumbnail img').attr('src');
                    list.push({ name, category, image_url, content_type: 'video', description: name, link });
                   
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
