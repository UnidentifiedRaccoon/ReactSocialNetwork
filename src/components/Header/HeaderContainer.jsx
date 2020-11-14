import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import {setAuthUserData} from '../../redux/reducers/auth-reducer'
import Axios from 'axios';

class HeaderAPIContainer extends React.Component {
    componentDidMount() {
        Axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
        .then(Response => {
            if (Response.data.resultCode == 0) {
                let {id, login, email} = Response.data.data;
                this.props.setAuthUserData(id, login, email);
            }
        })
    }
    render() {
         return <Header {...this.props}/>;
    }
       
}

let mapStateToProps = (state) => ({
    isAutorise: state.auth.isAutorise,
    login: state.auth.login,
})

const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderAPIContainer);

export default HeaderContainer;