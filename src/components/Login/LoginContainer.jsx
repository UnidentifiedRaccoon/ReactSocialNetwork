import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import Login from './Login'
import {login} from '../../redux/reducers/auth-reducer'
import { Redirect } from 'react-router-dom';

class LoginContainer extends React.Component {
    render() {
        if (this.props.isAutorized) {
           return <Redirect to='/profile'/>
        }
        return (
            <Login login={this.props.login}/>
        )
    }
}

let mapStateToProps = (state) =>  ({
    isAutorized: state.auth.isAutorized
})

export default compose(
    connect(mapStateToProps, {login})
)(LoginContainer)