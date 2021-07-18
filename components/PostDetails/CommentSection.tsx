import React, { ReactElement } from 'react'
import EachComment from '../EachComment/EachComment'

interface Props {

}

export default function CommentSection({ }: Props): ReactElement {
    return (
        <div className="widget mb-50">
            <div className="title">
                <h5>3 Comments</h5>
            </div>

            <ul className="widget-comments">
                <EachComment />
                <EachComment />
                <EachComment />
                <EachComment />
            </ul>

            <div className="title">
                <h5>Leave a Comment</h5>
            </div>
            <form className="widget-form" action="#" method="POST" id="main_contact_form">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea name="message" id="message" cols={30} rows={5} className="form-control" placeholder="Message*" required ></textarea>
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
