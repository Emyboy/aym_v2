import {
    LOGIN_USER
} from "../../actions/auth/auth.action.types"
// import {
//     AuthStateType,
// } from './auth.reducer.types'

const initialState = {
    user: null
}

interface AuthAction {
    type: string;
    payload: object;
}

export default (state = initialState, { type, payload }: AuthAction) => {
    switch (type) {

        case LOGIN_USER:
            return {
                ...state,
                user: payload
            }

        default:
            return state
    }
}


