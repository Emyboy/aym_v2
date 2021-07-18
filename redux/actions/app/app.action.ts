import axios from "axios"
import { Dispatch } from "redux"
import Global from "../../../Global"
import { SET_APP_STATE } from "./app.action.types"



export const getAllCategories = () => (dispatch: Dispatch) => {
    axios(Global.API_URL + '/categories')
        .then(res => {
            console.log('cat --', res.data)
            dispatch({
                type: SET_APP_STATE,
                payload: {
                    categories: res.data
                }
            })
        })
        .catch(err => {
            alert('Error fetching categories')
        })
}

