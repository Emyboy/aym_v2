import axios from 'axios'
import Cookies from 'js-cookie'
import React, { ReactElement, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Global from '../../Global'
import { AuthStateType } from '../../redux/reducers/auth/auth.reducer.types'
import { ReduxState } from '../../redux/store/state.type'
import { CommentTypes } from '../../types/CommentType'
import { PostItem } from '../../types/Post.types'
import EachComment from '../EachComment/EachComment'

interface Props {
    post: PostItem;
    auth: AuthStateType
}

function CommentSection({ post, auth }: Props): ReactElement {

    const [comments, setComments] = useState<CommentTypes[]>([]);
    const [comment_text, set_comment_text] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        axios(Global.API_URL + `/comments/?post=${post.id}`)
            .then(res => {
                setComments(res.data)
                console.log('COMMENTS ---', res)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    const addNewComment = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)
        axios(Global.API_URL + '/comments', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${Cookies.get('_token')}`
            },
            data: {
                users_permissions_user: auth.user,
                comment_text,
                post: post.id
            }
        })
            .then(res => {
                setLoading(false);
                // console.log(res);
                const newComment = {...res.data, isNew: true};
                const updatedCommentList = [...comments, newComment];
                setComments(updatedCommentList);
                (document.querySelector<HTMLInputElement>('#comment') as HTMLInputElement).value = '';
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            })
    }

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
            <form className="widget-form" action="#" method="POST" id="main_contact_form" onSubmit={addNewComment}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea
                                name="comment"
                                id="comment"
                                cols={30}
                                rows={2}
                                className="form-control"
                                placeholder="Comment*"
                                required
                                defaultValue={comment_text}
                                onChange={e => set_comment_text(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-12">
                        <button type="submit" name="submit" className="btn-custom" disabled={loading}>
                            {loading ? "Loading..." : 'Post Comment'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
};

const mapStateToProps = (state: ReduxState) => ({
    auth: state.auth
})

export default connect(
    mapStateToProps
)(CommentSection);
