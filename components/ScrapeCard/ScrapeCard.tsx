import React, { ReactElement } from 'react'

interface Props {
    post: any;
}

export default function ScrapeCard({ post }: Props): ReactElement {
    return (
        <div className='col-lg-6 col-md-6'>
            <div className="post-card mt-5">
                <div className="post-card-image">
                    <a href="post-default.html">
                        <img src={post.image_url} alt="" />
                    </a>
                </div>
                <div className="post-card-content">
                    <a href="blog-grid.html" className="categorie">Food</a>
                    <h5>
                        <a href="post-default.html">{post.name}</a>
                    </h5>
                    {/* <p>{post.description}</p> */}
                    {/* <div className="post-card-info">
                    <ul className="list-inline">
                        <li>
                            <a href="author.html">
                                <img src="assets/img/author/1.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="author.html">David Smith</a>
                        </li>
                        <li className="dot"></li>
                        <li>January 15, 2021</li>
                    </ul>
                </div> */}
                </div>
            </div>
        </div>
    )
}
