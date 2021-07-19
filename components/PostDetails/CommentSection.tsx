import axios from 'axios'
import React, { ReactElement, useEffect, useState } from 'react'
import Global from '../../Global'
import { CommentTypes } from '../../types/CommentType'
import { PostItem } from '../../types/Post.types'
import EachComment from '../EachComment/EachComment'

interface Props {
    post: PostItem;
}

export default function CommentSection({ post }: Props): ReactElement {

    const [comments, setComments] = useState<CommentTypes[]>([]);

    useEffect(() => {
        axios(Global.API_URL + `/comments/?post=${post.id}`)
            .then(res => {
                setComments(res.data)
                console.log('COMMENTS ---', res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="widget mb-50">
            <div className="title">
                <h5>{comments.length} Comments</h5>
            </div>

            <ul className="widget-comments">
                {
                    comments.map((val, i) => {
                        return <EachComment key={i} data={val} />
                    })
                }
            </ul>

            <div className="title">
                <h5>Leave a Comment</h5>
            </div>
            <form className="widget-form" action="#" method="POST" id="main_contact_form">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea name="comment" id="comment" cols={30} rows={2} className="form-control" placeholder="Comment*" required ></textarea>
                        </div>
                    </div>

                    <div className="col-12">
                        <button type="submit" name="submit" className="btn-custom">
                            Post Comment
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
