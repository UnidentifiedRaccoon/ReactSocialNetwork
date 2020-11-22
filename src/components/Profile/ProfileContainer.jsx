import React from 'react';
import Profile from './Profile'
import {connect} from 'react-redux'
import {setProfile} from './../../redux/reducers/profilePage-reducer'
import Loading from '../Common/Loading/Loading'
import {Redirect, withRouter} from 'react-router-dom'
import { getProfileTC } from '../../redux/reducers/profilePage-reducer';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import { compose } from 'redux';




class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = 1604;
        }
        this.props.getProfileTC(userID)
    }

    render() {
        if(!this.props.profile) {
            return (
                <Loading isLoading={true}/>
            )
        }
        return <Profile {...this.props}/>
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})


export default compose(
    connect(mapStateToProps, {setProfile, getProfileTC}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)