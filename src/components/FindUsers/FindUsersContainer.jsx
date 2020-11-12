import React from 'react';
import {
    follow,
    unfollow,
    setUsers,
    setActivePage,
    setTotalCount,
    setIsLoading,
} from '../../redux/reducers/findUsersPage-reducer'
import {connect} from 'react-redux'
import FindUsers from './FindUsers'
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
    isLoading: state.findUsersPage.isLoading
})
const FindUsersContainer = connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setActivePage,
        setTotalCount,
        setIsLoading,
    })(FindUsersAPIContainer)

export default FindUsersContainer;