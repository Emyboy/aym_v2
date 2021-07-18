import React, { ReactElement, useState, useEffect } from 'react';
import Link from 'next/link'
import Img from 'next/image'
import { connect } from 'react-redux';
import { loginWithGooglePopup } from '../../redux/actions/auth/auth.action';
import { ReduxState } from '../../redux/store/state.type';
import { AuthStateType } from '../../redux/reducers/auth/auth.reducer.types';

interface NavbarProps {
    auth: AuthStateType;
    LoginWithGoogle: Function;

}

const Navbar = (props: NavbarProps): ReactElement => {

    const { auth } = props;
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        if(!auth.user){
            props.LoginWithGoogle();
        }
    }, []);

    return <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
            <div className="logo">
                <Link passHref href="/">
                    <Img src="/logo.png" alt="" className="logo-dark" width={700} height={100} />
                    {/* <img src="assets/img/logo-white.png" alt="" className="logo-white" /> */}
                </Link>
            </div>

            <div className={`collapse navbar-collapse ${dropdown ? 'show' : ''}`} id="main_nav">
                <ul className="navbar-nav ml-auto mr-auto">
                    <li className="nav-item">
                        <Link passHref href='/'>
                            <a className="nav-link"> Home </a>
                        </Link>
                    </li>

                    {
                        auth.user ? <li className="nav-item">
                            <Link href='/profile'>
                                <a className="nav-link"> Profile </a>
                            </Link>
                        </li> : null
                    }
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

const mapStateToProps = (state: ReduxState) => ({
    auth: state.auth,
});

const mapDispatchToProps = {
    LoginWithGoogle: loginWithGooglePopup
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);

