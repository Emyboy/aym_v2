import axios from 'axios';
import React, { ReactElement, useState, useEffect } from 'react'
import Global from '../../Global';
import { PostCategory, PostItem } from '../../types/Post.types';
import PostCardLG from '../EachPost/PostCardLG'
import ScrapeCard from '../ScrapeCard/ScrapeCard';
import SidePanel from '../SidePanel/SidePanel';


type Props = {
    list?: PostItem[],
    category?: PostCategory;
    category_text?: string;
    category_description?: string;
    category_id?: number;
}

export default function HomePage({
    list,
    category,
    category_description,
    category_text
}: Props): ReactElement {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios('http://localhost:3000/api/scrape/videos')
            .then(res => {
                console.log(res);
                setVideos(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <section className="masonry-layout col2-layout">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8  mb-5">
                            <section className="categorie-section">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="categorie-title">
                                                <h3>Category: <span>{category_text}</span> </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div className="card-columns pb-5">
                                {
                                    list?.map((data, i) => {
                                        return <PostCardLG key={i} post={data} />
                                    })
                                }
                                {
                                    videos?.map((data, i) => {
                                        return <ScrapeCard key={i} post={data} />
                                    })
                                }
                            </div>
                        </div>
                        <SidePanel />
                    </div>
                </div>
            </section>
        </>
    )
}
