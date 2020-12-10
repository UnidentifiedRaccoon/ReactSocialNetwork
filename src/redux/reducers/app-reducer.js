import { getAuthTC } from "./auth-reducer";

const SET_INITIALIZED = 'SET-INITIALIZED'

let initialState = {
    isInitialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return ({
                ...state,
                isInitialized: true,
            })
        default:
            return state;
    }
    
}

const setInitialized = () => ({type: SET_INITIALIZED})
export const initialize = () => (dispatch) => {
    let promise = dispatch(getAuthTC());

    Promise.all([promise]).then(() => {
        dispatch(setInitialized())
    })
}






export default appReducer;