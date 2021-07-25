import React, { ReactElement } from 'react'
import { PostItem } from '../../types/Post.types'
import PostCardLG from '../EachPost/PostCardLG'
import Heading from '../Heading/Heading'
import ScrapeCard from '../ScrapeCard/ScrapeCard'

interface Props {
    list: any[];
    heading: string;
    headingValue: string;
    scraped?: boolean;
}

export default function CategoryList({
    list,
    heading,
    headingValue,
    scraped,
}: Props): ReactElement {
    return (
        <div>
            <Heading
                heading={heading}
                headingValue={headingValue}
            />
            <div className='row'>
                {
                    list.map((val, i) => {
                        if (scraped) {
                            return <ScrapeCard post={val} key={i} />
                        }else {
                            return <PostCardLG post={val} key={i} />
                        }
                    })
                }
            </div>
        </div>
    )
}
