import React from 'react';
import {
    follow,
    unfollow,
    setUsers,
    setActivePage,
    setTotalCount,
    setIsLoading,
    setSubscriptionInProgress,
} from '../../redux/reducers/findUsersPage-reducer'
import {connect} from 'react-redux'
import FindUsers from './FindUsers'
import Loading from '../Common/Loading/Loading'
import { usersAPI } from '../../api/api';


class FindUsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.setIsLoading(true);
        usersAPI.getUsers(this.props.currentPage, this.props.count)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
                this.props.setIsLoading(false);
            })
    }

    onClickActivatePage = (pageNumber) => {
        this.props.setActivePage(pageNumber);
        this.props.setIsLoading(true);
        usersAPI.getUsers(pageNumber, this.props.count)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setIsLoading(false);
            })
    }

    render() {
        let isFetching = false;
        return (
            <>
                <Loading isLoading={this.props.isLoading}/>
                <FindUsers totalCount={this.props.totalCount}
                           count={this.props.count}
                           currentPage={this.props.currentPage}
                           usersData={this.props.usersData}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
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

const FindUsersContainer = connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setActivePage,
        setTotalCount,
        setIsLoading,
        setSubscriptionInProgress,
    })(FindUsersAPIContainer)

export default FindUsersContainer;