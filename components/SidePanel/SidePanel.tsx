import React, { ReactElement } from 'react'
import AdminCard from '../AdminCard/AdminCard'
import EachPostSM from '../EachPost/EachPostSM'
import Sticky from 'react-sticky-el';

interface Props {

}

export default function SidePanel({ }: Props): ReactElement {
    return (
        <div className="col-lg-4 max-width">
            <AdminCard />
            <Sticky stickyStyle={{ marginTop: '9vh'}}>
                <div className="widget ">
                    <div className="section-title">
                        <h5>Latest Posts</h5>
                    </div>
                    <ul className="widget-latest-posts">
                        <EachPostSM />
                        <EachPostSM />
                        <EachPostSM />
                        <EachPostSM />
                    </ul>
                </div>
                <div className="widget">
                    <div className="section-title">
                        <h5>Categories</h5>
                    </div>
                    <ul className="widget-categories">
                        <li>
                            <a href="#" className="categorie">Livestyle</a>
                            <span className="ml-auto">22 Posts</span>
                        </li>
                    </ul>
                </div>

                {/* <div className="widget">
                    <div className="section-title">
                        <h5>Tags</h5>
                    </div>
                    <div className="widget-tags">
                        <ul className="list-inline">
                            <li>
                                <a href="blog-grid.html">Travel</a>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </Sticky>


        </div>
    )
}
