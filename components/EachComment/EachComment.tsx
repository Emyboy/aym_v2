import React, { ReactElement, useState } from 'react'
import Img from 'next/image';
import { CommentTypes } from '../../types/CommentType';
import moment from 'moment';
import { AuthStateType } from '../../redux/reducers/auth/auth.reducer.types';
import { connect } from 'react-redux';
import { ReduxState } from '../../redux/store/state.type';


interface Props {
    data: CommentTypes;
    auth: AuthStateType
}

function EachComment({ data, auth }: Props): ReactElement {

    const [edit, setEdit] = useState<boolean>(false);
    const [comment_text, set_comment_text] = useState<string>(data.comment_text);

    return (
        <li className={`comment-item ${data.isNew ? 'animate__animated animate__bounceInUp' : ''}`}>
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
                        </form> :
                        <p>
                            {data.comment_text}
                        </p>
                }
                {
                    auth.user && !edit && data.users_permissions_user.id === auth.user.id ? <div>
                        <button className="link btn"> <i className="fa fa-trash mr-1 mt-1 mb-1"></i> Delete</button>
                        <button onClick={() => setEdit(true)} className="link btn bg-success ml-3"> <i className="fa fa-pen mr-1 mt-1 mb-1"></i> Edit</button>
                    </div> : null
                }
                {
                    auth.user && edit && data.users_permissions_user.id === auth.user.id ? <div>
                        <button onClick={() => setEdit(false)} className="link btn"> <i className="fa fa-times mr-1 mt-1 mb-1"></i> Cancel</button>
                        <button className="link btn bg-success ml-3"> <i className="fa fa-save mr-1 mt-1 mb-1"></i> Save</button>
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
