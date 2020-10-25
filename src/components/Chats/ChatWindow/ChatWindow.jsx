import React from 'react'
import cs from './ChatWindow.module.css'
import  {MessagesList__item as Message} from './MessagesList__item/MessagesList__item'

let messagesData = [
    {id: 0, text: 'Hello, world'},
    {id: 1, text: 'Thanos\'s snap'},
    {id: 2, text: 'Your interlocutor was annihilate'},
]

const ChatWindow = (props) => {
    let messagesListElements = messagesData.map(message => <Message key={message.id} text={message.text}/>)
    return(
        <section className={cs.chatWindow}>
            <ul className={cs.messagesList}>
                {messagesListElements}
            </ul>
        </section>

    )
}

export {ChatWindow}