import React, { ReactElement, useEffect, useState } from 'react'
import Img from 'next/image';
import { connect } from 'react-redux';
import { ReduxState } from '../../redux/store/state.type';
import { AuthStateType, UserPermission } from '../../redux/reducers/auth/auth.reducer.types';
import { GetServerSideProps } from 'next';
import Global from '../../Global';
import PageNotFound from '../../components/PageNotFound';

interface Props {
    auth: AuthStateType;
    data: UserPermission[];
}

function UserProfile({ auth, data }: Props): ReactElement {

    if(data.length === 0){
        return <PageNotFound />
    }else {
        const user = data[0];
        return (
            <div>
                <section className="section author full-space mb-40 pt-55">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="widget-author inner-width">
                                    <a href="author.html" className="image">
                                        <Img src={user.avatar_url} alt="" width={500} height={500} />
                                    </a>
                                    <h6><span>{user.first_name} {user.last_name}</span></h6>
                                    {/* <div className="link">13 Articles</div> */}
                                    <p>{user.bio}</p>
    
                                    {/* <div className="social-media">
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
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

const mapStateToProps = (state: ReduxState) => ({
    auth: state.auth,
});


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { username } = ctx.query;
    const user = await fetch(Global.API_URL + `/users/?username=${username}`);
    const data: UserPermission[] = await user.json()

    return {
        props: {
            data,
        },
    }
}

export default connect(
    mapStateToProps
)(UserProfile)
