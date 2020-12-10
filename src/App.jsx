import React from 'react';
import {Route, withRouter} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import ChatsContainer from './components/Chats/ChatsContainer'
import {Courses} from './components/Courses/Courses'
import {SideBar} from './components/SideBar/SideBar'
import FindUsersContainer from './components/FindUsers/FindUsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import {initialize} from './redux/reducers/app-reducer'
import { compose } from 'redux';
import Loading from './components/Common/Loading/Loading';



class App extends React.Component {
    componentDidMount() {
        this.props.initialize()
    }
    render() {
        if (!this.props.isInitialized) {
            return <Loading isLoading={true}/>

        }
         return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-main-content'>
                    <Route path='/Login' render={ () => <LoginContainer/>}/>
                    <Route path='/Profile/:userID?' render={ () => <ProfileContainer/>}/>
                    <Route path='/Chats' render={ () => <ChatsContainer/>}/>
                    <Route path='/FindUsers' render={ () => <FindUsersContainer/>}/>
                    <Route path='/Courses' render={ () => <Courses data={this.props.store.getState().coursesPage}/>}/>
                </div>
                <SideBar data={this.props.store.getState().sideBar}/>
            </div>

        );
    }
   
}

let mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized,
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initialize})
)(App);
