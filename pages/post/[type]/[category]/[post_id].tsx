import React, { ReactElement } from 'react'
import AdminCard from '../../../../components/AdminCard/AdminCard'
import EachPostSM from '../../../../components/EachPost/EachPostSM'
import CommentSection from '../../../../components/PostDetails/CommentSection'
import NextandPrevPost from '../../../../components/PostDetails/NextandPrevPost'
import PostBody from '../../../../components/PostDetails/PostBody'
import SidePanel from '../../../../components/SidePanel/SidePanel'

interface Props {

}

export default function PostDetails({ }: Props): ReactElement {
    return (
        <section className="section pt-55 ">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-8 mb-20">
                        <PostBody />
                        <NextandPrevPost />
                        <CommentSection />
                    </div>

                    <SidePanel />

                </div>
            </div>
        </section>
    )
}
