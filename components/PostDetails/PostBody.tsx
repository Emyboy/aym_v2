import React, { ReactElement } from 'react'
import { PostItem } from '../../types/Post.types'
import Link from 'next/link'
import moment from 'moment'
import parse from 'html-react-parser';

interface Props {
    post: PostItem;
}

export default function PostBody({ post }: Props): ReactElement {
    // console.log('body --', post)
    return (
        <div className="post-single">
            <div className="post-single-image">
                <img src={post.image_url} alt={post.title} width={1000} height={800} />
            </div>
            <div className="post-single-content">
                {
                    post.category ? <Link href={`/category/${post.category.id}`}>
                        <a className="categorie">travel</a>
                    </Link> : null
                }
                <h4>{post.title}</h4>
                {
                    post.users_permissions_user ? <div className="post-single-info">
                        <ul className="list-inline">
                            <li><a href="author.html"><img src={post.users_permissions_user.avatar_url} alt="" /></a></li>
                            <li><a href="author.html">{post.users_permissions_user.first_name} {post.users_permissions_user.last_name}</a> </li>
                            <li className="dot"></li>
                            <li>{moment(post.created_at).fromNow()}</li>
                            <li className="dot"></li>
                            <li>3 comments</li>
                        </ul>
                    </div> : null
                }
            </div>

            <div className="post-single-body">
                {parse(post.body)}
            </div>

            <div className="post-single-footer">
                <div className="tags">
                    <ul className="list-inline">
                        {
                            post.categories.map(category => {
                                return <li key={category.id}>
                                    <Link href={`/category/${category.id}`}>
                                        <a>{category.name.toUpperCase()}</a>
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="social-media">
                    <ul className="list-inline">
                        <li>
                            <a href="#" className="color-facebook">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="color-instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="color-twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="color-youtube">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="color-pinterest">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
