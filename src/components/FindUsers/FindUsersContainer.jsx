import React from 'react';
import {
    followAC,
    unfollowAC,
    setUsersAC,
    setActivePageAC,
    setTotalCountAC,
} from '../../redux/reducers/findUsersPage-reducer'
import {connect} from 'react-redux'
import FindUsersClass from './FindUsersClass'

let mapStateToProps = (state) => ({
    usersData: state.findUsersPage.usersData,
    count: state.findUsersPage.count,
    totalCount: state.findUsersPage.totalCount,
    currentPage: state.findUsersPage.currentPage,
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
        setActivePage: (pageNumber) => {
            dispatch(setActivePageAC(pageNumber));
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        },
    }
)


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersClass)

export default FindUsersContainer;