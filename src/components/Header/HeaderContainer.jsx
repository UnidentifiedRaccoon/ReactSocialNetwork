import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import {getAuthTC, logout, setAuthUserData} from '../../redux/reducers/auth-reducer'
import { compose } from 'redux';

class HeaderContainer extends React.Component {
    render() {
         return <Header {...this.props}/>;
    }
       
}

let mapStateToProps = (state) => ({
    isAutorized: state.auth.isAutorized,
    login: state.auth.login,
})

export default compose(
    connect(mapStateToProps, {setAuthUserData, logout})
)(HeaderContainer)