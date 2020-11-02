import React from 'react';
import cs from './SideBar.module.css'
import {FriendsOnline} from './FriendsOnline/FriendsOnline.jsx'


const SideBar = (props) => {
    return (
        <main className={cs.sideBar}>
            <article>Advertisement</article>
            <FriendsOnline data={props.data.friendsOnline}/>
        </main>
    )
}

export {SideBar}