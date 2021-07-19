import React, { ReactElement, useEffect, useState } from 'react'
import AdminCard from '../AdminCard/AdminCard'
import EachPostSM from '../EachPost/EachPostSM'
import Sticky from 'react-sticky-el';
import { CategoryTypes } from '../../types/Category.types';
import axios from 'axios';
import Global from '../../Global';
import { PostItem } from '../../types/Post.types';


interface Props {

}

export default function SidePanel(props: Props): ReactElement {
    const [categories, setCategories] = useState<CategoryTypes[]>([]);
    const [posts, setPosts] = useState<PostItem[]>([]);

    useEffect(() => {
        axios(Global.API_URL + '/categories?_limit=7')
            .then(res => {
                console.log('cat --', res.data)
                setCategories(res.data)
            })
    }, []);

    useEffect(() => {
        axios(Global.API_URL + '/posts?_limit=6')
            .then(res => {
                console.log('cat --', res.data)
                setPosts(res.data)
            })
    }, [])

    return (
        <div className="col-lg-4 max-width">
            <AdminCard />
            <div className="widget">
                <div className="section-title">
                    <h5>Categories</h5>
                </div>
                <ul className="widget-categories">
                    {
                        categories.map((val, i) => {
                            return <li key={i}>
                                <a href="#" className="categorie">{val.name}</a>
                                <span className="ml-auto">{val.posts.length} Posts</span>
                            </li>
                        })
                    }
                </ul>
            </div>
            <Sticky stickyStyle={{ marginTop: '9vh' }}>
                <div className="widget ">
                    <div className="section-title">
                        <h5>Latest Posts</h5>
                    </div>
                    <ul className="widget-latest-posts">
                        {
                            posts.map((val, i) => {
                                return <EachPostSM key={i} index={i} post={val} />
                            })
                        }
                    </ul>
                </div>

                {/* <div className="widget">
                    <div className="section-title">
                        <h5>Tags</h5>
                    </div>
                    <div className="widget-tags">
                        <ul className="list-inline">
                            <li>
                                <a href="blog-grid.html">Travel</a>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </Sticky>


        </div>
    )
}


