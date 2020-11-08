import React from 'react'
import {
    actionCreatorOnClickAddPost,
    actionCreatorOnChangeUpdatePost
} from '../../../redux/reducers/profilePage-reducer.js'
import {UserPosts} from './UserPosts'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        userPosts: state.profilePage.userPosts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onClickAddPost: () => {
            let action = actionCreatorOnClickAddPost();
            dispatch(action);
        },
        onChangeUpdatePost: (newText) => {
            let action = actionCreatorOnChangeUpdatePost(newText);
            dispatch(action);
        }
    }
}


const UserPostsContainer = connect(mapStateToProps, mapDispatchToProps)(UserPosts)

export {UserPostsContainer}