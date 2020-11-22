import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import {getAuthTC, setAuthUserData} from '../../redux/reducers/auth-reducer'
import { compose } from 'redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthTC()
    }
    render() {
         return <Header {...this.props}/>;
    }
       
}

let mapStateToProps = (state) => ({
    isAutorise: state.auth.isAutorise,
    login: state.auth.login,
})

export default compose(
    connect(mapStateToProps, {setAuthUserData, getAuthTC,})
)(HeaderContainer)