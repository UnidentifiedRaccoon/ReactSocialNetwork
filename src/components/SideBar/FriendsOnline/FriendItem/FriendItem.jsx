import React from 'react';
import cs from './FriendItem.module.css'

let FriendItem = (props) => {
    return (
        <li id={props.key} className={cs.friendItem}>
            <span>{props.icon}</span>
            <b>{props.name}</b>
        </li>
    )
}

export {FriendItem}