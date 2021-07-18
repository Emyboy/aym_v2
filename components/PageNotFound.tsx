import Link from 'next/link'
import React, { ReactElement } from 'react'

interface Props {
    
}

export default function PageNotFound({}: Props): ReactElement {
    return (
        <section className="section pt-55 mb-50">
            <div className="container-fluid">
                <div className="page404  widget">
                    <div className="image">
                        {/* <img src="assets/img/404.html" alt="" /> */}
                    </div>
                    <div className="content">
                        <h1>404</h1>
                        <h3>Page Not Found.</h3>
                        <p>It looks like nothing was found at this location. </p>
                        <Link passHref href="/">
                            <a className="btn-custom">Go back to Home</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
