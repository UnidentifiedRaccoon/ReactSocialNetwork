import React from 'react';
import {
    followAC,
    unfollowAC,
    setUsersAC,
    setActivePageAC,
    setTotalCountAC,
    setIsLoadingAC,
} from '../../redux/reducers/findUsersPage-reducer'
import {connect} from 'react-redux'
import FindUsers from './FindUsers/FindUsers'
import Loading from '../Common/Loading/Loading'
import * as axios from 'axios'



class FindUsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.setIsLoading(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                this.props.setIsLoading(false);
            })
    }

    onClickActivatePage = (pageNumber) => {
        this.props.setActivePage(pageNumber);
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.count}`)
            .then(response => {
                this.props.setUsers(response.data.items);
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
    isLoading:  state.findUsersPage.isLoading
})
let mapDispatchToProps = (dispatch) => ({
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
    setIsLoading: (isLoading) => {
        dispatch(setIsLoadingAC(isLoading));
    },
})
const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersAPIContainer)

export default FindUsersContainer;