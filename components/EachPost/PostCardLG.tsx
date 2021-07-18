import { ReactElement } from "react"
import Link from 'next/link'
import Img from 'next/image'
import { PostItem } from "../../types/Post.types";
import moment from "moment"

interface PostCardLGProps {
    post: PostItem
}

const PostCardLG = (props: PostCardLGProps): ReactElement => {
    const { post } = props;
    return <div className="card">
        <div className="post-card">
            <div className="post-card-image">
                <Link href={`/post/${post.content_type}/${post.category.id}/${post.storage_id}`}>
                    <img src={post.src} alt="" width={500} height={500} />
                </Link>

            </div>
            <div className="post-card-content">
                {
                    post.category ? <Link href="/category/id">
                        <a className="categorie">{post.category.name}</a>
                    </Link> : null
                }
                <h5>
                    <Link href={`/post/${post.content_type}/${post.category.id}/${post.storage_id}`}>{post.title}</Link>
                </h5>
                <p>{post.description}
                </p>
                {
                    post.users_permissions_user ? <div className="post-card-info">
                        <ul className="list-inline">
                            <li>
                                <a href="author.html">
                                    <img src={post.users_permissions_user.avatar_url} alt="" width={500} height={500} />
                                </a>
                            </li>
                            <li>
                                <a href="author.html">{post.users_permissions_user.first_name} {post.users_permissions_user.last_name}</a>
                            </li>
                            <li className="dot"></li>
                            <li>{moment(post.created_at).fromNow()}</li>
                        </ul>
                    </div> : null
                }
            </div>
        </div>
    </div>
}


export default PostCardLG;