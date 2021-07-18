import React, { ReactElement } from 'react'
import Editor from '../components/Editor/Editor'

interface Props {
    
}

export default function compose({}: Props): ReactElement {
    return (
        <div>
            <Editor />
        </div>
    )
}
