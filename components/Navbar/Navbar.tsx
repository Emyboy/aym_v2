import React, { ReactElement, useState } from 'react';
import Link from 'next/link'
import Img from 'next/image'
import { connect } from 'react-redux';

interface NavbarProps {
    app: object;
}

const Navbar = (props: NavbarProps): ReactElement => {

    console.log('Navbar props --', props)
    const [dropdown, setDropdown] = useState(false);

    return <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
            <div className="logo">
                <Link href="/">
                    <Img src="/logo.png" alt="" className="logo-dark" width={2900} height={500}/>
                    {/* <img src="assets/img/logo-white.png" alt="" className="logo-white" /> */}
                </Link>
            </div>

            <div className={`collapse navbar-collapse ${dropdown ? 'show' : ''}`} id="main_nav">
                <ul className="navbar-nav ml-auto mr-auto">
                    <li className="nav-item">
                        <Link href='/'>
                            <a className="nav-link"> Home </a>
                        </Link>
                    </li>

                    {/* <li className="nav-item dropdown">
                        <a className="nav-link  dropdown-toggle" href="blog-grid.html" data-toggle="dropdown"> Blog </a>
                        <ul className="dropdown-menu fade-up">
                            <li><a className="dropdown-item" href="blog-grid.html"> Blog grid</a></li>
                            <li><a className="dropdown-item" href="blog-masonry.html"> Blog masonry </a></li>
                            <li>
                                <a className="dropdown-item " href="blog-list.html"> Blog list </a>
                            </li>
                        </ul>
                    </li> */}
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link  dropdown-toggle" href="post-default.html" data-toggle="dropdown"> Posts Features </a>
                        <ul className="dropdown-menu fade-up">
                            <li><a className="dropdown-item" href="post-default.html"> post default</a></li>
                            <li>
                                <a className="dropdown-item" href="post-video.html"> post video</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="post-audio.html"> post audio</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="post-gallery.html"> post gallery</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="post-no-sidebar.html"> post no sidebar </a>
                            </li>
                            <li><a className="dropdown-item" href="post-left-sidebar.html"> post left sidebar </a></li>
                        </ul>
                    </li> */}

                    {/* <li className="nav-item dropdown">
                        <a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">Pages </a>
                        <ul className="dropdown-menu fade-up">
                            <li>
                                <a className="dropdown-item" href="about.html"> About </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="author.html"> author </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="login.html"> Login </a>
                            </li>
                            <li>
                                <a className="dropdown-item " href="register.html"> Sign up </a>
                            </li>
                            <li>
                                <a className="dropdown-item " href="page404.html"> Page 404 </a>
                            </li>
                        </ul>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html"> Contact </a>
                    </li>

                </ul>
            </div>

            <div className="navbar-right ml-auto">
                {/* <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <div className="slider round"></div>
                    </label>
                </div> */}

                <div className="social-icones">
                    <ul className="list-inline">
                        <li>
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="search-icon">
                    <i className="icon_search"></i>
                </div>

                <button onClick={() => {
                    setDropdown(!dropdown)
                }} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </nav>
}

const mapStateToProps = (state:any) => ({
    app: state.app
})

export default connect(
    mapStateToProps
)(Navbar);

