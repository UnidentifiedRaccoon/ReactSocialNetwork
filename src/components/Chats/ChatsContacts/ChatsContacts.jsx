import React from 'react'
import cs from './ChatsContacts.module.css'
import {ChatsList__item as Chat} from './ChatsList__item/ChatsList__item'

let chatsData = [
    {id: 1, name: 'Ronin'},
    {id: 2, name: 'Mortis'},
    {id: 3, name: 'Sten_Li'},
    {id: 4, name: 'JonyJostar'},
    {id: 5, name: 'Riana'}
]

const ChatsContacts = (props) => {
    let chatsListElements = chatsData.map(chat => <Chat key={chat.id} id={chat.id} name={chat.name}/>)
    return (

        <section className={cs.chatsContacts}>
            <ul className={cs.chatsList}>
                {chatsListElements}
            </ul>
        </section>
    )
}

export {ChatsContacts}

