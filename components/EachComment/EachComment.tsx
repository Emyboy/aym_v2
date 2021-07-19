import React, { ReactElement } from 'react'
import Img from 'next/image';
import { CommentTypes } from '../../types/CommentType';
import moment from 'moment';


interface Props {
    data: CommentTypes
}

export default function EachComment({ data }: Props): ReactElement {
    return (
        <li className="comment-item">
            <img src={data.users_permissions_user.avatar_url} alt="" className="avatar" />
            <div className="content">
                <ul className="info list-inline">
                    <li><b>{data.users_permissions_user.first_name} {data.users_permissions_user.last_name}</b></li>
                    <li className="dot"></li>
                    <li> {moment(data.created_at).fromNow()}</li>
                </ul>
                <p>
                    {data.comment_text}
                </p>
                <div>
                    {/* <a href="#" className="link"> <i className="arrow_back"></i> Reply</a> */}
                </div>
            </div>
        </li>
    )
}
