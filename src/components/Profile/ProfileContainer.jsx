import React from 'react';
import Profile from './Profile'
import {connect} from 'react-redux'
import {setProfile} from './../../redux/reducers/profilePage-reducer'
import Loading from '../Common/Loading/Loading'
import {Redirect, withRouter} from 'react-router-dom'
import { getProfileTC } from '../../redux/reducers/profilePage-reducer';
import withAuthRedirect from '../../HOC/withAuthRedirect';




class ProfileClassContainer extends React.Component {
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

let ProfileRedirectContainer = withAuthRedirect(ProfileClassContainer)




let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let ProfileUrlDataContainer = withRouter(ProfileRedirectContainer)

let ProfileContainer = connect(mapStateToProps, {setProfile, getProfileTC})(ProfileUrlDataContainer)

export default ProfileContainer