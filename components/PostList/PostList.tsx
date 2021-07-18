import React, { ReactElement } from 'react'
import { PostCategory, PostItem } from '../../types/Post.types';
import PostCardLG from '../EachPost/PostCardLG'
import SidePanel from '../SidePanel/SidePanel';


type Props = {
    list?: PostItem[],
    category?: PostCategory
}

export default function HomePage({ list }: Props): ReactElement {
    return (
        <>
            <section className="categorie-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="categorie-title">
                                <small>
                                    <a href="index.html">Home</a>
                                    <span className="arrow_carrot-right"></span> Livestyle
                                </small>
                                <h3>Category : <span>livestyle</span> </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="masonry-layout col2-layout mt-30">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 mt--10">
                            <div className="card-columns">
                                {
                                    list?.map((data, i) => {
                                        return <PostCardLG key={i} post={data} />
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
