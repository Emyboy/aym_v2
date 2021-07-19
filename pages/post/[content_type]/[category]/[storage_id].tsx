import { GetServerSideProps } from 'next'
import React, { ReactElement } from 'react'
import CommentSection from '../../../../components/PostDetails/CommentSection'
import NextandPrevPost from '../../../../components/PostDetails/NextandPrevPost'
import PostBody from '../../../../components/PostDetails/PostBody'
import SidePanel from '../../../../components/SidePanel/SidePanel'
import Global from '../../../../Global'
import { PostItem } from '../../../../types/Post.types'

interface Props {
    data: PostItem[]
}

export default function PostDetails(props: Props): ReactElement {
    // console.log('post --', props)
    const _post = props.data[0];
    return (
        <section className="section pt-55 ">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-8 mb-20">
                        <PostBody post={_post} />
                        {/* <NextandPrevPost post={_post} /> */}
                        <CommentSection post={_post} />
                    </div>

                    <SidePanel />

                </div>
            </div>
        </section>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { content_type, category, storage_id } = ctx.query;
    const res = await fetch(Global.API_URL + `/posts/?storage_id=${storage_id}`);
    const data: PostItem[] = await res.json()

    return {
        props: {
            data,
        },
    }
}
