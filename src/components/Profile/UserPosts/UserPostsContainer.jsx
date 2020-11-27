import React from 'react'
import { addNewPost } from '../../../redux/reducers/profilePage-reducer'
import UserPosts from './UserPosts'
import { connect } from 'react-redux'
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
        addNewPost
    })
)(UserPostsContainer)
