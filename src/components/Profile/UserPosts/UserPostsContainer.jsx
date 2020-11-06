import React from 'react'
import {actionCreatorOnClickAddPost, actionCreatorOnChangeUpdatePost} from '../../../redux/reducers/profilePage-reducer.js'
import {UserPosts} from './UserPosts'


const UserPostsContainer = (props) => {
    let userPosts = props.store.getState().profilePage.userPosts;
    let onClickAddPost = () => {
        let action = actionCreatorOnClickAddPost();
        props.store.dispatch(action);
    }

    let onChangeUpdatePost = (newText) => {
        let action = actionCreatorOnChangeUpdatePost(newText);
        props.store.dispatch(action);
    }

    return (
        <UserPosts userPosts={userPosts}
                   onClickAddPost={onClickAddPost}
                   onChangeUpdatePost={onChangeUpdatePost}/>
    )
}

export {UserPostsContainer}