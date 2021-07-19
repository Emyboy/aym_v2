import React, { ReactElement } from 'react'
import Img from 'next/image'
import { PostItem } from '../../types/Post.types'
import Link from 'next/link'
import moment from 'moment'

interface Props {
    post: PostItem;
    index: number;
}

export default function EachPostSM({ post, index }: Props): ReactElement {
    return (
        <li className="last-post">
            <div className="image">
                <Link passHref href={`/post/${post.content_type}/${post.category.id}/${post.storage_id}`}>
                    <a>
                        <img src={post.image_url} alt="..." />
                    </a>
                </Link>
            </div>
            <div className="nb">{index + 1}</div>
            <div className="content">
                <p>
                    <Link passHref href={`/post/${post.content_type}/${post.category.id}/${post.storage_id}`}>
                        <a>{post.title}</a>
                    </Link>
                </p>
                <small><span className="icon_clock_alt"></span> {moment(post.created_at).fromNow()}</small>
            </div>
        </li>
    )
}
