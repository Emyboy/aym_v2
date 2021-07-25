import Link from 'next/link'
import React, { ReactElement } from 'react'

interface Props {
    post: any;
}

export default function ScrapeCard({ post }: Props): ReactElement {
    return (
        <div className='col-lg-6 col-md-6'>
            <div className="post-card mt-5">
                <div className="post-card-image">
                    <Link href={`/netn${post.link}`}>
                        <img src={post.image_url} alt="" />
                    </Link>
                </div>
                <div className="post-card-content">
                    <a className="categorie text-white">Imported</a>
                    <h5>
                        <Link href={`/netn${post.link}`}>{post.name}</Link>
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
