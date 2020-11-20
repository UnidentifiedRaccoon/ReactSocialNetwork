import React from 'react'
import cs from './Chats.module.css'
import {ChatsContactsContainer} from './ChatsContacts/ChatsContactsContainer.jsx'
import {ChatWindowContainer} from './ChatWindow/ChatWindowContainer.jsx'


const Chats = () => {

    return (
        <main className={cs.chats}>
            <ChatsContactsContainer/>
            <ChatWindowContainer/>
        </main>
    )
}

export default Chats

