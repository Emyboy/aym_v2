import { Dispatch } from 'redux';
import firebase from "firebase/app";
import "firebase/auth";
import axios from 'axios';
import Global from '../../../Global';
import initFirebase from "../../../services/Firebase";
import { LOGIN_USER } from './auth.action.types'
initFirebase();
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';


const provider = new firebase.auth.GoogleAuthProvider();

export const loginWithGooglePopup = () => async (dispatch: Dispatch) => {
    const username = uuidv4()
    const result: any = await firebase.auth().signInWithPopup(provider);
    // console.log(result);
    const user = result.user.providerData;
    // console.log('USER ----', user);
    axios(Global.API_URL + `/users/?email=${user[0].email}`)
        .then(res => {
            // console.log(res);
            // if user is in DB
            if (res.data.length > 0) {
                axios(Global.API_URL + `/auth/local`, {
                    method: 'POST',
                    data: {
                        identifier:  user[0].uid,
                        password: user[0].uid
                    }
                })
                    .then(res => {
                        console.log('USER --', res);
                        Cookies.set('_token', res.data.jwt, { expires: 7 })
                        dispatch({
                            type: LOGIN_USER,
                            payload: res.data.user
                        })
                    })
                    .catch(err => {
                        alert('Login Error')
                    })
            } else {
                axios(Global.API_URL + "/auth/local/register", {
                    method: 'POST',
                    data: {
                        username: `${username}@${user[0].displayName.split(' ')[1]}`,
                        email: user[0].email,
                        password: user[0].uid,
                        first_name: user[0].displayName.split(' ')[0],
                        last_name: user[0].displayName.split(' ')[1],
                        avatar_url: user[0].photoURL,
                        phone_number: user[0].phoneNumber
                    }
                })
                    .then(res => {
                        console.log('USER --', res);
                        Cookies.set('_token', res.data.jwt, { expires: 7 })
                        dispatch({
                            type: LOGIN_USER,
                            payload: res.data.user
                        })
                    })
                    .catch(err => {
                        // console.log('status ---', err.response.status)
                        // console.log({...err})
                        alert('Login error')
                    })
            }
        })

}

