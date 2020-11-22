import React from 'react';
import {
    follow,
    unfollow,
    setUsers,
    setActivePage,
    setTotalCount,
    setIsLoading,
    setSubscriptionInProgress,
    getUsersThunkCreator,
    firstGetUsersThunkCreator,
    followTC,
    unfollowTC,
} from '../../redux/reducers/findUsersPage-reducer'
import {connect} from 'react-redux'
import FindUsers from './FindUsers'
import Loading from '../Common/Loading/Loading'
import { compose } from 'redux';


class FindUsersContainer extends React.Component {
    componentDidMount() {
        this.props.firstGetUsersThunkCreator(this.props.currentPage, this.props.count)
    }

    onClickActivatePage = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.count)
    }

    render() {
        return (
            <>
                <Loading isLoading={this.props.isLoading}/>
                <FindUsers totalCount={this.props.totalCount}
                           count={this.props.count}
                           currentPage={this.props.currentPage}
                           usersData={this.props.usersData}
                           followTC={this.props.followTC}
                           unfollowTC={this.props.unfollowTC}
                           onClickActivatePage={this.onClickActivatePage}
                           subscriptionInProgress={this.props.subscriptionInProgress}
                           setSubscriptionInProgress={this.props.setSubscriptionInProgress}
                />
            </>
        )
    }


}

let mapStateToProps = (state) => ({
    usersData: state.findUsersPage.usersData,
    count: state.findUsersPage.count,
    totalCount: state.findUsersPage.totalCount,
    currentPage: state.findUsersPage.currentPage,
    isLoading: state.findUsersPage.isLoading,
    subscriptionInProgress: state.findUsersPage.subscriptionInProgress,
})


export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setActivePage,
        setTotalCount,
        setIsLoading,
        setSubscriptionInProgress,
        firstGetUsersThunkCreator,
        getUsersThunkCreator,
        followTC,
        unfollowTC,
    })
)(FindUsersContainer)