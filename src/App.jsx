import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import {Header} from './components/Header/Header.jsx'
import {Navbar} from './components/Navbar/Navbar.jsx'
import {Profile} from './components/Profile/Profile.jsx'
import {Chats} from './components/Chats/Chats.jsx'
import {Courses} from './components/Courses/Courses.jsx'



const App = (props) => {
    return (
        <BrowserRouter>

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-main-content'>
                    <Route path='/Profile' render={ () => <Profile data={props.data.profilePage}/>}/>
                    <Route path='/Chats' render={ () => <Chats data={props.data.chatsPage}/>}/>
                    <Route path='/Courses' render={ () => <Courses data={props.data.coursesPage}/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
