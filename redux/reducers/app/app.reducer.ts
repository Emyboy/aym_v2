import {
    SET_APP_STATE
 } from '../../actions/app/app.action.types';

const initialState = {
    categories: [],
    showSearch: false
}

interface Action {
    type: string;
    payload: object;
}

export default (state = initialState, { type, payload }: Action) => {
    switch (type) {

        case SET_APP_STATE:
            return { ...state, ...payload }

        default:
            return state
    }
}
