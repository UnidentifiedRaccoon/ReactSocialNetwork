import React from 'react'
import {actionCreatorOnClickAddPost, actionCreatorOnChangeUpdatePost} from '../../../redux/reducers/profilePage-reducer.js'
import {UserPosts} from './UserPosts'
import Context from '../../../context'


const UserPostsContainer = () => {
    return (
        <Context.Consumer>
            {store => {
                let userPosts = store.getState().profilePage.userPosts;
                let onClickAddPost = () => {
                    let action = actionCreatorOnClickAddPost();
                    store.dispatch(action);
                }

                let onChangeUpdatePost = (newText) => {
                    let action = actionCreatorOnChangeUpdatePost(newText);
                    store.dispatch(action);
                }
                return (
                    <UserPosts userPosts={userPosts}
                               onClickAddPost={onClickAddPost}
                               onChangeUpdatePost={onChangeUpdatePost}/>
                )
            }}
        </Context.Consumer>
    )
}

export {UserPostsContainer}