import React, { ReactElement, useState, useEffect } from 'react';
import Link from 'next/link'
import Img from 'next/image'
import { connect } from 'react-redux';
import { loginWithGooglePopup } from '../../redux/actions/auth/auth.action';
import { ReduxState } from '../../redux/store/state.type';
import { AuthStateType } from '../../redux/reducers/auth/auth.reducer.types';
import {
    getAllCategories
} from '../../redux/actions/app/app.action'
import { AppReducerType } from '../../redux/reducers/app/app.reducer.types';
import store from '../../redux/store/store';
import { SET_APP_STATE } from '../../redux/actions/app/app.action.types';

interface NavbarProps {
    auth: AuthStateType;
    LoginWithGoogle: Function;
    getAllCategories: Function;
    app: AppReducerType
}

const Navbar = (props: NavbarProps): ReactElement => {

    const { auth } = props;
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        if (!auth.user) {
            props.LoginWithGoogle();
        };
        props.getAllCategories()
    }, []);

    const toggleSearch = () => {
        store.dispatch({
            type: SET_APP_STATE,
            payload: {
                showSearch: !store.getState().app.showSearch
            }
        })
    }

    return <>
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <div className="logo">
                    <Link passHref href="/">
                        <img src="/logo.png" alt="" className="logo-dark" width="200px" />
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
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html"> Contact </a>
                        </li>

                        {
                            auth.user ? <>
                                <li className="nav-item">
                                    <Link href={`/user/${auth.user.username}`}>
                                        <a className="nav-link"> Profile </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href='/compose'>
                                        <a className="nav-link"> Compose </a>
                                    </Link>
                                </li>
                            </> : null
                        }

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

                    <div className="search-icon" onClick={toggleSearch}>
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
        <button className="search-icon bg-theme text-white btn shadow" onClick={toggleSearch} style={{
            position: 'fixed', bottom: '30px', right: '30px', borderRadius: '50%', display: 'block', zIndex: 50,
            height: '60px',
            width: '60px'
        }}>
            <i className="icon_search " style={{ fontSize: '25px' }}></i>
        </button>
    </>
}

const mapStateToProps = (state: ReduxState) => ({
    auth: state.auth,
    app: state.app,
});

const mapDispatchToProps = {
    LoginWithGoogle: loginWithGooglePopup,
    getAllCategories: getAllCategories
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);

