 import { stopSubmit } from 'redux-form';
import {authAPI} from '../../api/api'


const SET_USER_DATA = 'SET-USER-DATA';
const UNSET_USER_DATA = 'UNSET-USER-DATA'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAutorized: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return ({
                ...state,
                ...action.data,
                isAutorized: true,
            });
        case UNSET_USER_DATA:
            return ({
                ...state,
                userId: null,
                login: null,
                email: null,
                isAutorized: false,
            })
        default:
            return state;
    }
    
}

export const setAuthUserData = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}})
export const unsetAuthUserData = () => ({type: UNSET_USER_DATA})

export const getAuthTC = () => (dispatch) => {
    return (
        authAPI.auth()
        .then(data => {
             if (data.resultCode == 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email));
             }
        })
    )
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe) 
    .then(data => {
        if (data.resultCode == 0) {
            dispatch(getAuthTC());
        } else {
            let message = data.messages;
            dispatch(stopSubmit('login', {_error: message}))
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout() 
    .then(data => {
        if (data.resultCode == 0) {
            dispatch(unsetAuthUserData());
        }
    })
}



export default authReducer;