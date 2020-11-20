import {authAPI, profileAPI} from '../../api/api'

const ADD_NEW_POST = 'ADD-NEW-POST';
const ON_CHANGE_NEW_POST = 'ON-CHANGE-NEW-POST';
const SET_PROFILE = 'SET-PROFILE';

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
};

let onClickAddPost = (state) => {
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
}


let onChangeUpdatePost = (state, newText) => {
    return {
        ...state,
        userPosts: {
            ...state.userPosts,
            newPostText: newText,
        }
    }
}


const profilePageReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case ADD_NEW_POST:
            return onClickAddPost(state);

        case ON_CHANGE_NEW_POST:
            return onChangeUpdatePost(state, action.newText);
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }




        default:
            return state;
    }
}

export const actionCreatorOnClickAddPost = () => ({type: ADD_NEW_POST});
export const actionCreatorOnChangeUpdatePost = (newText) =>
    ({type: ON_CHANGE_NEW_POST, newText});
export const setProfile = (profile) => ({type: SET_PROFILE, profile});

export const getProfileTC = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
    .then(response => {
        dispatch(setProfile(response.data))
    })
}

export default profilePageReducer;