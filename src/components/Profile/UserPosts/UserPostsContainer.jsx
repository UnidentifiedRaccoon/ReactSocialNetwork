import React from 'react'
import {
    actionCreatorOnClickAddPost,
    actionCreatorOnChangeUpdatePost
} from '../../../redux/reducers/profilePage-reducer.js'
import {UserPosts} from './UserPosts'
import {connect} from 'react-redux'


// const UserPostsContainer = () => {
//     return (
//         <Context.Consumer>
//             {store => {
//                 let userPosts = store.getState().profilePage.userPosts;
//                 let onClickAddPost = () => {
//                     let action = actionCreatorOnClickAddPost();
//                     store.dispatch(action);
//                 }
//
//                 let onChangeUpdatePost = (newText) => {
//                     let action = actionCreatorOnChangeUpdatePost(newText);
//                     store.dispatch(action);
//                 }
//                 return (
//                     <UserPosts userPosts={userPosts}
//                                onClickAddPost={onClickAddPost}
//                                onChangeUpdatePost={onChangeUpdatePost}/>
//                 )
//             }}
//         </Context.Consumer>
//     )
// }

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