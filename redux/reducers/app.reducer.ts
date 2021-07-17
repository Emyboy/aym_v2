

const initialState = {
    showNav: false
}

interface Action {
    type: string;
    payload: object;
}

export default (state = initialState, { type, payload }: Action) => {
    switch (type) {

        case 'typeName':
            return { ...state, ...payload }

        default:
            return state
    }
}
