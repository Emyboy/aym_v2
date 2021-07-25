// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import request from 'request';
import cheerio from 'cheerio';

type Data = {
    name: object
}

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
    console.log(req.query.category)
    try {
        request('https://www.thenetnaija.com/videos', (err, response: any, html) => {
            console.log(err);
            if (!err) {
                const $ = cheerio.load(html);
                const list: EachPost[] = [];
                $('.video-files article').each((i, el) => {
                    const name: string = $(el).find('.info h2').text().replace(/\s\s+/g, '');
                    const category: string = $(el).find('.info .category').text().replace(/\s\s+/g, '');
                    const image_url = $(el).find('.thumbnail img').attr('src');
                    list.push({ name, category, image_url, content_type: 'video', description: name });
                    console.log(
                        $(el).find('.info .meta .inner').html()
                    )
                })
                res.status(200).send(list);
            } else {
                res.status(500).json('error')
            }
        })
    } catch (error) {
        res.status(500).json(error)
    }
    // res.status(200).json({ name: 'category slug' })
}
