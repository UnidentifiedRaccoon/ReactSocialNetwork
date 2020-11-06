import React from 'react';
import cs from './Profile.module.css'
import {UserInfo} from './UserInfo/UserInfo.jsx'
import {UserPostsContainer} from './UserPosts/UserPostsContainer.jsx'


const Profile = (props) => {
    return (
        <main className={cs.profile}>
            <UserInfo/>
            <UserPostsContainer store={props.store}/>
        </main>
    )
}

export {Profile}