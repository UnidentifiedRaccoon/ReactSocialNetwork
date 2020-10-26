import React from 'react'
import cs from './ChatWindow.module.css'
import  {MessagesList__item as Message} from './MessagesList__item/MessagesList__item'

const ChatWindow = (props) => {
    let messagesListElements = props.data.messagesData.map(message => <Message key={message.id} text={message.text}/>)
    return(
        <section className={cs.chatWindow}>
            <ul className={cs.messagesList}>
                {messagesListElements}
            </ul>
        </section>

    )
}

export {ChatWindow}