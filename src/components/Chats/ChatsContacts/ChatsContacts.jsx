import React from 'react'
import cs from './ChatsContacts.module.css'
import {ChatsList__item as Chat} from './ChatsList__item/ChatsList__item'

const ChatsContacts = (props) => {
    let chatsListElements = props.chatsContacts.chatsData.map(chat => <Chat key={chat.id} id={chat.id} name={chat.name}/>)
    return (
        <section className={cs.chatsContacts}>
            <ul className={cs.chatsList}>
                {chatsListElements}
            </ul>
        </section>
    )
}

export default ChatsContacts

