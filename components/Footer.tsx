import React, { ReactElement } from 'react'

interface Props {
    
}

export default function Footer({}: Props): ReactElement {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright">
                            <p>© Copyright {new Date().getFullYear()}  <a href="https://emyboy.github.io/portfolio/" target="_blank" rel="noreferrer">iDegin</a> , All rights reserved.</p>
                        </div>
                        <div className="back">
                            <a href="#" className="back-top">
                                <i className="arrow_up"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
