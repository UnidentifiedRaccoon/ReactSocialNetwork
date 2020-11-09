import React from 'react';
import {followAC, unfollowAC, setUsersAC} from '../../redux/reducers/findUsersPage-reducer'
import {connect} from 'react-redux'
import FindUsersClass from './FindUsersClass'

let mapStateToProps = (state) => ({
    usersData: state.findUsersPage.usersData,

})

let mapDispatchToProps = (dispatch) => (
    {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    }
)


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersClass)

export default FindUsersContainer;