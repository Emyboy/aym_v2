import React, { ReactElement } from 'react'

interface Props {

}

export default function EachPostSM({ }: Props): ReactElement {
    return (
        <li className="last-post">
            <div className="image">
                <a href="post-default.html">
                    <img src="assets/img/latest/1.jpg" alt="..." />
                </a>
            </div>
            <div className="nb">1</div>
            <div className="content">
                <p><a href="post-default.html">5 Things I Wish I Knew Before Traveling to Malaysia</a></p>
                <small><span className="icon_clock_alt"></span> January 15, 2021</small>
            </div>
        </li>
    )
}
