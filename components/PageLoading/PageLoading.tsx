import React, { ReactElement } from 'react'
import Img from 'next/image';

interface Props {
    
}

export default function PageLoading({}: Props): ReactElement {
    return (
        <div id='page-loader' className='text-center'>
            <span>
                <img src='/assets/img/loading.gif' width='200' height='200' className='mb-5' />
            </span>
        </div>
    )
}
