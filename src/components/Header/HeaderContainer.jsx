import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import {setAuthUserData} from '../../redux/reducers/auth-reducer'
import { authAPI } from '../../api/api';

class HeaderAPIContainer extends React.Component {
    componentDidMount() {
        authAPI.auth()
        .then(data => {
            if (data.resultCode == 0) {
                let {id, login, email} = data.data;
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