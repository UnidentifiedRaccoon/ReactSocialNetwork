import React from 'react'
import cs from './Chats.module.css'
import {NavLink} from 'react-router-dom'
import {ChatsContactsContainer} from './ChatsContacts/ChatsContactsContainer.jsx'
import {ChatWindowContainer} from './ChatWindow/ChatWindowContainer.jsx'


const Chats = (props) => {

    return (
        <main className={cs.chats}>
            <ChatsContactsContainer store={props.store}/>
            <ChatWindowContainer store={props.store}/>
        </main>
    )
}

export {Chats}

