import React, { ReactElement } from 'react'
import Img from 'next/image';


interface Props {
    
}

export default function EachComment({}: Props): ReactElement {
    return (
        <li className="comment-item">
            <img src="/assets/img/1.jpg" alt="" className="avatar" />
                <div className="content">
                    <ul className="info list-inline">
                        <li>Mohammed Ali</li>
                        <li className="dot"></li>
                        <li> January 15, 2021</li>
                    </ul>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat
                        quod non fugiat aliquid sit similique!
                    </p>
                    <div><a href="#" className="link"> <i className="arrow_back"></i> Reply</a></div>
                </div>
                            </li>
    )
}
