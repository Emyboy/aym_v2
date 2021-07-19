import React, { ReactElement } from 'react'
import Img from 'next/image'
interface Props {

}

export default function AdminCard({ }: Props): ReactElement {
    return (
        <div className="widget">
            <div className="widget-author">
                <a href="author.html" className="image">
                    <img src="/assets/img/uchechi.jpeg" alt=""/>
                </a>
                <h6>
                    <span>My name</span>
                </h6>
                <p>

                    about me
                </p>


                <div className="social-media">
                    <ul className="list-inline">
                        <li>
                            <a href="https://www.facebook.com/uchechi.nwangwu" target="_blank" className="color-facebook">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com/channel/UCg-XS60LD7QxYzajM3lM9Iw" target="_blank" className="color-youtube">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="http://linkedin.com/in/nwangwu-uchechi" target="_blank" className="color-facebook">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        {/* <li>
                            <a href="#" className="color-twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="color-pinterest">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}
