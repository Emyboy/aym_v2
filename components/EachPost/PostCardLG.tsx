import { ReactElement } from "react"
import Link from 'next/link'


const PostCardLG = (): ReactElement => {
    return <div className="card">
        <div className="post-card">
            <div className="post-card-image">
                <Link href="/post/article/3/g455b5b544b45b6-4b4-4">
                    <img src={`/assets/img/3.jpg`} alt="" />
                </Link>

            </div>
            <div className="post-card-content">
                <a href="blog-grid.html" className="categorie"> Travel</a>
                <h5>
                    <a href="/post/article/3/g455b5b544b45b6-4b4-4">Rodrigues Island: When I Found a Paradise Next to Paradise</a>
                </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...
                </p>
                <div className="post-card-info">
                    <ul className="list-inline">
                        <li>
                            <a href="author.html">
                                <img src={`/assets/img/1.jpg`} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="author.html">David Smith</a>
                        </li>
                        <li className="dot"></li>
                        <li>January 15, 2021</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}


export default PostCardLG;