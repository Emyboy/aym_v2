import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { ReactElement } from 'react'
import SidePanel from '../../../../components/SidePanel/SidePanel';
import Global from '../../../../Global';
import { PostItem } from '../../../../types/Post.types';
import PostDetails from '../../../post/[content_type]/[category]/[storage_id]'

interface Props {
    data: any;
}

export default function NetDetailsPage({ data }: Props): ReactElement {
    return (
        <section className='section pt-55 '>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-8 mb-20'>


                        <div className="post-single">
                            <div className="post-single-image">
                                <img src={data.image_url} alt="" />
                            </div>
                            <div className="post-single-content">
                                <a href="blog-grid.html" className="categorie">travel</a>
                                <h4>{data.title} </h4>
                                <div className="post-single-info">
                                    <ul className="list-inline">
                                        <li><a href="author.html"><img src="https://uptime.com/media/website_profiles/thenetnaija.com.png" alt="" /></a></li>
                                        <li><a href="author.html">thenetnaija</a> </li>
                                        <li className="dot"></li>
                                        <li>January 15, 2021</li>
                                        <li className="dot"></li>
                                        <li>3 comments</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="post-single-body">
                                <p>{data.description}</p>

                            </div>
                            {
                                data.downloadUrl ? <div className="text-center">
                                    <a href={data.downloadUrl} target="_blank">
                                        <button className="btn btn-danger shadow">Download Now</button>
                                    </a>
                                </div> : null
                            }
                            {
                                data.iframe ? <><hr />
                                    <h4 className="mb-2">Trailer</h4>
                                    <iframe
                                        src={data.iframe}
                                        width="100%"
                                        height='500px'
                                        className='border-0'
                                        style={{ borderRadius: '20px' }}
                                    /></> : null
                            }

                            <div className="post-single-footer">
                                <div className="tags">
                                    <ul className="list-inline">
                                        <li>
                                            <a href="blog-grid.html">Travel</a>
                                        </li>
                                        <li>
                                            <a href="blog-grid.html">Nature</a>
                                        </li>
                                        <li>
                                            <a href="blog-grid.html">tips</a>
                                        </li>
                                        <li>
                                            <a href="blog-grid.html">forest</a>
                                        </li>
                                        <li>
                                            <a href="blog-grid.html">beach</a>
                                        </li>

                                    </ul>
                                </div>
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





                    </div>
                    <SidePanel />
                </div>
            </div>
        </section>
    )
};


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { slug, category, sub_category } = ctx.query;
    const url = Global.SITE_URL + `/api/scrape/net/${category}/${sub_category}/${slug}`;
    console.log('REQUEST URL ---', url);

    const res = await fetch(url);
    const data = await res.json();

    console.log('data --', data);

    return {
        props: {
            data: data[0],
        },
    }
}


