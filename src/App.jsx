import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import ChatsContainer from './components/Chats/ChatsContainer'
import {Courses} from './components/Courses/Courses'
import {SideBar} from './components/SideBar/SideBar'
import Login from './components/Login/Login'
import FindUsersContainer from './components/FindUsers/FindUsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'



const App = (props) => {

    return (
        <BrowserRouter>

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-main-content'>
                    <Route path='/Login' render={ () => <Login/>}/>
                    <Route path='/Profile/:userID?' render={ () => <ProfileContainer/>}/>
                    <Route path='/Chats' render={ () => <ChatsContainer/>}/>
                    <Route path='/FindUsers' render={ () => <FindUsersContainer/>}/>
                    <Route path='/Courses' render={ () => <Courses data={props.store.getState().coursesPage}/>}/>
                </div>
                <SideBar data={props.store.getState().sideBar}/>
            </div>
        </BrowserRouter>

    );
}

export default App;
