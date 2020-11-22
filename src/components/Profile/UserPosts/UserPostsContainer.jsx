import React from 'react'
import {
    addNewPost,
    updateNewPost
} from '../../../redux/reducers/profilePage-reducer'
import UserPosts from './UserPosts'
import {connect} from 'react-redux'
import { render } from '@testing-library/react';
import { compose } from 'redux';

class UserPostsContainer extends React.Component {
  render() {
        return <UserPosts {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userPosts: state.profilePage.userPosts,
    }
} 

export default compose(
    connect(mapStateToProps, {
        addNewPost,
        updateNewPost,
    })
)(UserPostsContainer)
