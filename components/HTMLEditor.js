import React, { useState, useEffect, useRef } from 'react'


const HTMLEditor = (props) => {
    const { onChange } = props;
    const editorRef = useRef()
    const [editorLoaded, setEditorLoaded] = useState(false)
    const { CKEditor, ClassicEditor } = editorRef.current || {};
    const [imageFile, setImageFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [state, setState] = useState({
        html: null,
        title: null,
        loading: false,
        description: null,
        subCategories: [],
        category: null,
    })

    useEffect(() => {
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
            ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
        }
        setEditorLoaded(true)
    }, [])

    const { context } = props;

    if (true) {
        return editorLoaded ? (
            <div >
                <CKEditor
                    editor={ClassicEditor}
                    style={{ height: '70vh'}}

                    // data="<p>Hello from CKEditor 5!</p>"
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        // console.log({ event, editor, data });
                        setState({ ...state, html: data })
                        onChange(data)
                    }}
                    onBlur={(event, editor) => {
                        // console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        // console.log('Focus.', editor);
                    }}
                />

            </div>
        ) : (
            <div>Editor loading</div>
        )
    } else {
        return <h6>Loading...</h6>
    }
}

export default HTMLEditor;