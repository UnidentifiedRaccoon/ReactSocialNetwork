import React from 'react'
import cs from './ChatsList__item.module.css'
import {NavLink} from 'react-router-dom'



const ChatsList__item = (props) => {
    return (
        <li className={cs.chatsList__item}>
            <NavLink to={'/chats/' + props.id}>{props.name}</NavLink>
        </li>
    )
}

export {ChatsList__item}