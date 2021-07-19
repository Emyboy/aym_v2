import React, { useEffect, useState, useCallback } from 'react';
import DropdownSelect from 'react-select';
import axios from 'axios';
import Global from '../../Global';
import { useDropzone } from 'react-dropzone'
import firebase from "firebase/app";
import "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import HTMLEditor from '../HTMLEditor';
import { useRouter } from 'next/router'
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import PageNotFound from '../PageNotFound';

const Editor = (props => {
    const router = useRouter()
    const { app, auth } = props;

    const [state, setState] = useState({
        loading: false,
        fileData: null,
        showPage: false,
        storage_id: null
    })
    var storageRef = firebase.storage().ref();

    const [data, setData] = useState({
        title: null,
        description: null,
        categories: [],
        category: [],
        body: null,
        users_permissions_user: null,
        image_url: null,
        src: null,
        content_type: 'article'
    });

    const [postDone, setPostDone] = useState(false);

    const deleteFile = (id) => {
        // Create a reference to the file to delete
        var desertRef = storageRef.child(`posts/${auth.user.id}/images/${id}_${auth.user.id}_1`);

        // Delete the file
        desertRef.delete().then(() => {
            // File deleted successfully
            console.log('removed file')
        }).catch((error) => {
            // Uh-oh, an error occurred!
            console.log(error)
        });
    }

    const sendToBackend = async (imageURL, storage_id) => {
        const post = {
            ...data,
            categories: data.categories.map(val => val.value),
            category: data.category.value,
            image_url: imageURL,
            src: imageURL,
            storage_id,
            users_permissions_user: auth.user.id || null,
        }
        // console.log('sending --', post);
        axios(Global.API_URL + '/posts', {
            method: 'POST',
            data: post,
            headers: {
                Authorization:
                    `Bearer ${Cookies.get('token')}`,
            },
        })
            .then(res => {
                setState({ ...state, storage_id, loading: false });
                // console.log(res)
                setPostDone(true)
            })
            .catch(err => {
                setState({ ...state, loading: false });
                // console.log(err)
                alert('Error creating post ')
                deleteFile(storage_id)
            })
    }

    const handleSubmit = async () => {
        const storage_id = uuidv4()
        var uploadTask = storageRef.child(`posts/${auth.user.id}/images/${storage_id}_${auth.user.id}_1`).put(state.fileData);
        setState({ ...state, loading: true })
        await uploadTask.on('state_changed',
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                alert(error)
                setState({ ...state, loading: false })
                return null
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    // console.log('File available at', downloadURL);
                    sendToBackend(downloadURL, storage_id)
                });
            }
        );
    }


    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log('SELECTED --', acceptedFiles)
        setState({ ...state, fileData: acceptedFiles[0] })
    }, [state])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    useEffect(() => {
        console.log('again')
        if (!auth.user) {
            router.push('/')
        } else {
            setState({ ...state, showPage: true })
        }
    }, []);

    useEffect(() => {
        if (postDone) {
            router.push(`/post/${data.content_type}/${data.category.value}/${state.storage_id}`)
        }
    }, [postDone])
    if (auth.user) {
        return (
            <div className='pt-4'>
                <div className="container bg-white mb-5 border" style={{ marginTop: '10vh' }}>

                    <form action="#">
                        <h1 className='text-center'>Create Post</h1>
                        <div className="w-100">
                            <div className="form-group">
                                <label>Post Title</label>
                                <input className='form-control' id="name" name='title' type="text" onChange={e => setData({ ...data, title: e.target.value })} />
                            </div>
                        </div>
                        <div className="row row--10 mb-3">
                            <div className='col-md-6'>
                                <label>Select An Image</label>
                                <DropdownSelect
                                    label='Category'
                                    value={data.category}
                                    onChange={e => setData({ ...data, category: e })}
                                    options={app.categories.map((val, i) => {
                                        return { value: val.id, label: val.name }
                                    })}
                                />
                            </div>
                            <div className='col-md-6'>
                                <label>Select Multiple Sub Categories</label>
                                <DropdownSelect
                                    label='Categories'
                                    value={data.categories}
                                    isMulti={true}
                                    onChange={e => setData({ ...data, categories: e })}
                                    options={app.categories.map((val, i) => {
                                        return { value: val.id, label: val.name }
                                    })}
                                />
                            </div>
                        </div>
                        {
                            state.fileData ?
                                <>
                                    <label>Select An Image</label>
                                    <div style={{ border: '1px solid gray', textAlign: 'center', padding: '5%', marginBottom: '12px', borderRadius: '5px' }}>
                                        <p className='mb-1'>File Selected</p>
                                        <button onClick={() => {
                                            setState({ ...state, fileData: null })
                                        }} className='btn btn-danger btn-lg'>Remove</button>
                                    </div>
                                </> :
                                <>
                                    <label>Select Post Category</label>
                                    <div {...getRootProps()} style={{ border: '1px solid gray', textAlign: 'center', padding: '5%', marginBottom: '12px', borderRadius: '5px' }}>
                                        <input {...getInputProps()} />
                                        {
                                            isDragActive ?
                                                <p>Drop the files here ...</p> :
                                                <p>Drag 'n' drop an image here, or click to select files</p>
                                        }
                                    </div>
                                </>
                        }
                        <div className="row row--10">
                            <div className="col-12">
                                <div className="form-group">
                                    <label>Short Description</label>
                                    <textarea maxLength='160' className='form-control' name="message" onChange={e => setData({ ...data, description: e.target.value })}
                                        rows='3'
                                    ></textarea>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <label>Type Post Content Here</label>
                                <HTMLEditor onChange={e => setData({ ...data, body: e })} />
                                <hr />
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <div onClick={handleSubmit} className="form-submit cerchio mt-5 mb-5" style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}>
                                        {/* <a className="axil-button button-rounded" href="#submit" tabindex="0"><span>Add Your Comment</span></a> */}
                                        <button type="button" className="btn-custom">{state.loading ? "Loading..." : 'Create Post'}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        );
    } else {
        return <PageNotFound />
    }

});


const mapStateToProps = (state) => ({
    app: state.app,
    auth: state.auth
})

export default connect(
    mapStateToProps
)(Editor);
