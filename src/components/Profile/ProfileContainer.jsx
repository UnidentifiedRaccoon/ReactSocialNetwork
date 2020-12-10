import React from 'react';
import Profile from './Profile'
import {connect} from 'react-redux'
import {} from './../../redux/reducers/profilePage-reducer'
import Loading from '../Common/Loading/Loading'
import {withRouter} from 'react-router-dom'
import { getProfileTC } from '../../redux/reducers/profilePage-reducer';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import { compose } from 'redux';




class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID && this.props.isAutorized){
            userID = this.props.autorizedUserId;
            // if (!userID) {
            //     this.props.history.push("/Login");
            // }
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
    autorizedUserId: state.auth.userId,
    isAutorized: state.auth.isAutorized
})


export default compose(
    connect(mapStateToProps, {getProfileTC}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)