import React from 'react'
import cs from './Chats.module.css'
import {NavLink} from 'react-router-dom'
import {ChatsContacts} from './ChatsContacts/ChatsContacts.jsx'
import {ChatWindow} from './ChatWindow/ChatWindow.jsx'


const Chats = (props) => {

    return (
        <main className={cs.chats}>
            <ChatsContacts data={props.data.chatsContacts}/>
            <ChatWindow data={props.data.chatWindow}
                        addNewMessage={props.addNewMessage}
                        onChangeNewMessage={props.onChangeNewMessage}/>
        </main>
    )
}

export {Chats}

