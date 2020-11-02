import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import {Header} from './components/Header/Header.jsx'
import {Navbar} from './components/Navbar/Navbar.jsx'
import {Profile} from './components/Profile/Profile.jsx'
import {Chats} from './components/Chats/Chats.jsx'
import {Courses} from './components/Courses/Courses.jsx'
import {SideBar} from './components/SideBar/SideBar.jsx'



const App = (props) => {

    return (
        <BrowserRouter>

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-main-content'>
                    <Route path='/Profile' render={ () => <Profile data={props.data.profilePage}
                                                                   addNewPost={props.addNewPost}
                                                                   onChangeNewPost={props.onChangeNewPost}/>}/>
                    <Route path='/Chats' render={ () => <Chats data={props.data.chatsPage}
                                                               addNewMessage={props.addNewMessage}
                                                               onChangeMessage={props.onChangeMessage}/>}/>
                    <Route path='/Courses' render={ () => <Courses data={props.data.coursesPage}/>}/>
                </div>
                <SideBar data={props.data.sideBar}/>
            </div>
        </BrowserRouter>

    );
}

export default App;
