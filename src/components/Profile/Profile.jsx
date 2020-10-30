import React from 'react';
import cs from './Profile.module.css'
import {UserInfo} from './UserInfo/UserInfo.jsx'
import {UserPosts} from './UserPosts/UserPosts.jsx'


const Profile = (props) => {

    return (
        <main className={cs.profile}>
            <UserInfo/>
            <UserPosts data={props.data.userPosts} addNewPost={props.addNewPost} onChangeNewPost={props.onChangeNewPost}/>
        </main>
    )
}

export {Profile}