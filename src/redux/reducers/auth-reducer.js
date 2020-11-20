 import {authAPI} from '../../api/api'


const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAutorise: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return ({
                ...state,
                ...action.data,
                isAutorise: true,
            });
        default:
            return state;
    }
    
}

export const setAuthUserData = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}})

export const getAuthTC = () => (dispatch) => {
    authAPI.auth()
    .then(data => {
        if (data.resultCode == 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email));
        }
    })
}


export default authReducer;