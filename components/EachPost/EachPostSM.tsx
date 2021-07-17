import React, { ReactElement } from 'react'
import Img from 'next/image'

interface Props {

}

export default function EachPostSM({ }: Props): ReactElement {
    return (
        <li className="last-post">
            <div className="image">
                <a href="post-default.html">
                    <Img src="/assets/img/3.jpg" alt="..." width={500} height={500} />
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
