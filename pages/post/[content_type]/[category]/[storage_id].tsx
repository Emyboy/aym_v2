import { GetServerSideProps } from 'next'
import React, { ReactElement } from 'react'
import CommentSection from '../../../../components/PostDetails/CommentSection'
import NextandPrevPost from '../../../../components/PostDetails/NextandPrevPost'
import PostBody from '../../../../components/PostDetails/PostBody'
import SidePanel from '../../../../components/SidePanel/SidePanel'
import Global from '../../../../Global'
import { PostItem } from '../../../../types/Post.types';
import { NextSeo } from 'next-seo';

interface Props {
    data: PostItem[]
}

export default function PostDetails(props: Props): ReactElement {
    // console.log('post --', props)
    const _post = props.data[0];
    return (
        <section className="section pt-55 ">
            <NextSeo
                title={_post.title + ' | AYM'}
                description={_post.description}

                openGraph={{
                    url: `${Global.SITE_URL + `/post/${_post.content_type}/${_post.category.id}/${_post.storage_id}`}`,
                    title: _post.title + ' | AYM',
                    description: _post.description,
                    article: {
                        publishedTime: _post.published_at,
                        modifiedTime: _post.updated_at,
                        section: _post.description,
                        authors: [
                            'http://linkedin.com/in/nwangwu-uchechi',
                        ],
                        tags: [..._post.categories.map(cat => {
                            return cat.name
                        })],
                    },
                    images: [
                        {
                            url: _post.image_url,
                            width: 800,
                            height: 600,
                            alt: _post.title,
                        }
                    ],
                    site_name: 'African Youth Minds',
                }}
                twitter={{
                    handle: '@africanyouthminds',
                    site: '@africanyouthminds',
                    cardType: 'summary_large_image',
                }}
            />
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
