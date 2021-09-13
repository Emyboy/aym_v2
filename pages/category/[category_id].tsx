import { GetServerSideProps } from 'next';
import React, { ContextType, ReactElement } from 'react'
import CategoryList from '../../components/CategoryList/CategoryList'
import SidePanel from '../../components/SidePanel/SidePanel';
import Global from '../../Global';
import { CategoryTypes } from '../../types/Category.types';
import { PostItem } from '../../types/Post.types';

interface Props {
    data: PostItem[],
    category: CategoryTypes;
}

export default function Category({ data, category }: Props): ReactElement {
    return (
        <section className='blog-grid'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <CategoryList heading="Category" list={data} scraped={false} headingValue={category.name} />
                    </div>
                    <SidePanel />
                </div>
            </div>
        </section>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
    const { category_id } = ctx.query;
    const res = await fetch(Global.API_URL + `/posts/?category=${category_id}`);
    const data: PostItem[] = await res.json();
    // category
    const cat = await fetch(Global.API_URL + `/categories/${category_id}`);
    const category: PostItem[] = await cat.json();
    console.log('CAT --',category)

    return {
        props: {
            data,
            category
        },
    }
}
