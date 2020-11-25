import {profileAPI} from '../../api/api'

const ADD_NEW_POST = 'ADD-NEW-POST';
const ON_CHANGE_NEW_POST = 'ON-CHANGE-NEW-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const UPDATE_STATUS = 'UPDATE-STATUS';


let initialState = {
    userPosts: {
        postsData: [
            {id: 0, message: "Hi it's my first post", like: 6, love: 1},
            {id: 1, message: "Stop... This post should be first! What's happened!!!", like: 13, love: 8},
            {id: 2, message: "Looks like someone make a mistake in code", like: -4, love: -5},
        ],
        newPostText: 'win'
    },
    profile: null,
    status: '',
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: 2,
                message: state.userPosts.newPostText,
                like: -4,
                love: -5
            };
            return {
                ...state,
                userPosts: {
                    ...state.userPosts,
                    postsData: [...state.userPosts.postsData, newPost],
                    newPostText: '',
                }
            }
        case ON_CHANGE_NEW_POST:
            return {
                ...state,
                userPosts: {
                    ...state.userPosts,
                    newPostText: action.newText,
                }
            }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.statusText,
            }
        }
        case UPDATE_STATUS: {
            return {
                ...state,
                status: action.updateStatusText,
            }
        }
        default:
            return state;
    }
}

export const addNewPost = () => ({type: ADD_NEW_POST});
export const updateNewPost = (newText) =>
    ({type: ON_CHANGE_NEW_POST, newText});


const setProfile = (profile) => ({type: SET_PROFILE, profile});

export const getProfileTC = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
    .then(response => {
        dispatch(setProfile(response.data))
    })
}

const setStatus = (statusText) => ({type: SET_STATUS, statusText});
const updateStatus = (updateStatusText) => ({type: UPDATE_STATUS, updateStatusText});

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => {
        dispatch(setStatus(response.data))
        return response.data
    })
}

export const setUpdateStatus = (updateStatusText) => (dispatch) => {
    profileAPI.updateStatus(updateStatusText)
    .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(updateStatus(updateStatusText))
        }
    })
}

export default profilePageReducer;