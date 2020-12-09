import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import Login from './Login'
import {login} from '../../redux/reducers/auth-reducer'

class LoginContainer extends React.Component {
    render() {
        return (
            <Login login={this.props.login}/>
        )
    }
}

let mapStateToProps = (state) =>  ({})

export default compose(
    connect(mapStateToProps, {login})
)(LoginContainer)