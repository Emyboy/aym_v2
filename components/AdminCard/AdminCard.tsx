import React, { ReactElement } from 'react'
import Img from 'next/image'
interface Props {

}

export default function AdminCard({ }: Props): ReactElement {
    return (
        <div className="widget">
            <div className="widget-author">
                <a href="author.html" className="image">
                    <Img src="/assets/img/1.jpg" alt="" width='100%' height='100%'/>
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
                            <a href="#" className="color-facebook">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="color-instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="color-twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="color-youtube">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="color-pinterest">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
