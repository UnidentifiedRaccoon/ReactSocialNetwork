import React from 'react';
import Profile from './Profile'
import * as axios from 'axios'
import {connect} from 'react-redux'
import {setProfile} from './../../redux/reducers/profilePage-reducer'
import Loading from '../Common/Loading/Loading'
import {withRouter} from 'react-router-dom'



class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        window.get = this.props
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = 2;
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userID)
            .then(response => {
                this.props.setProfile(response.data)

            })
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

let ProfileUrlDataContainer = withRouter(ProfileAPIContainer)

let ProfileContainer = connect(mapStateToProps, {setProfile})(ProfileUrlDataContainer)

export default ProfileContainer