import React, { ReactElement, useState } from 'react'
import Img from 'next/image';
import { CommentTypes } from '../../types/CommentType';
import moment from 'moment';
import { AuthStateType } from '../../redux/reducers/auth/auth.reducer.types';
import { connect } from 'react-redux';
import { ReduxState } from '../../redux/store/state.type';
import { Modal, Button, ButtonGroup } from 'react-bootstrap'
import axios from 'axios';
import Global from '../../Global';
import Cookies from 'js-cookie';

interface Props {
    data: CommentTypes;
    auth: AuthStateType;
}

function EachComment({ data, auth }: Props): ReactElement {

    const [edit, setEdit] = useState<boolean>(false);
    const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
    const [comment_text, set_comment_text] = useState<string>(data.comment_text);
    const [commentLoading, setCommentLoding] = useState<boolean>(false);
    const [commentDeleted, setCommentDeleted] = useState<boolean>(false);
    const [editedComment, setEditedComment] = useState<string>(comment_text);

    const deleteComment = () => {
        setCommentLoding(true);
        axios(Global.API_URL + `/comments/${data.id}`, {
            method: 'DELETE',
            headers: {
                Authorization:
                    `Bearer ${Cookies.get('_token')}`,
            },
        })
            .then(res => {
                setCommentLoding(false);
                setCommentDeleted(true);
            })
            .catch(err => {
                setCommentLoding(false);
            })
    };

    const updateComment = () => {
        setCommentLoding(true)
        axios(Global.API_URL + `/comments/${data.id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${Cookies.get('_token')}`
            },
            data: {
                comment_text: editedComment,
            }
        })
            .then(res => {
                setEdit(false);
                setCommentLoding(false);
                set_comment_text(res.data.comment_text);
            })
            .catch(err => {
                setCommentLoding(false)
            })
    }

    if (commentDeleted) {
        return <></>;
    } else
        return (
            <li className={`comment-item ${data.isNew ? 'animate__animated animate__bounceInUp' : ''}`}>
                <Modal show={confirmDelete} style={{ marginTop: '30vh' }}>
                    <Modal.Body className='text-center'>
                        <h4>Are you sure you want to delete?</h4>
                        <ButtonGroup aria-label="Basic example" className='w-100'>
                            <Button disabled={commentLoading} variant="danger" onClick={deleteComment}>{commentLoading ? "Loading..." : "YES"}</Button>
                            <Button disabled={commentLoading} className="btn btn-dark bg-dark text-white" onClick={() => setConfirmDelete(false)}>NO</Button>
                        </ButtonGroup>
                    </Modal.Body>

                </Modal>
                <img src={data.users_permissions_user.avatar_url} alt="" className="avatar" />
                <div className={`content ${edit ? 'w-100' : ''}`}>
                    <ul className="info list-inline">
                        <li><b>{data.users_permissions_user.first_name} {data.users_permissions_user.last_name}</b></li>
                        <li className="dot"></li>
                        <li> {moment(data.created_at).fromNow()}</li>
                    </ul>
                    {
                        edit ?
                            <form className="widget-form">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            name="comment"
                                            disabled={commentLoading}
                                            id="comment"
                                            cols={30}
                                            maxLength={200}
                                            rows={2}
                                            className="form-control"
                                            placeholder="Comment*"
                                            required
                                            defaultValue={editedComment}
                                            onChange={e => setEditedComment(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </form> :
                            <p>
                                {comment_text}
                            </p>
                    }
                    {
                        auth.user && !edit && data.users_permissions_user.id === auth.user.id ? <div>
                            <button disabled={commentLoading} onClick={() => setConfirmDelete(true)} className="link btn">
                                <i className="fa fa-trash mr-1 mt-1 mb-1"></i> Delete
                            </button>
                            <button disabled={commentLoading} onClick={() => setEdit(true)} className="link btn bg-success ml-3">
                                <i className="fa fa-pen mr-1 mt-1 mb-1"></i> Edit
                            </button>
                        </div> : null
                    }
                    {
                        auth.user && edit && data.users_permissions_user.id === auth.user.id ? <div>
                            <button disabled={commentLoading} onClick={() => setEdit(false)} className="link btn">
                                <i className="fa fa-times mr-1 mt-1 mb-1"></i> Cancel
                            </button>
                            <button onClick={updateComment} disabled={commentLoading} className="link btn bg-success ml-3">
                                <i className="fa fa-save mr-1 mt-1 mb-1"></i>{commentLoading ? "Loading..." : "Save"}
                            </button>
                        </div> : null
                    }
                </div>
            </li>
        )
}

const mapStateToProps = (state: ReduxState) => ({
    auth: state.auth
})

export default connect(
    mapStateToProps
)(EachComment)
