import React from 'react'
import cs from './ChatWindow.module.css'
import  {MessageItem} from './MessageItem/MessageItem.jsx'
import MessageFormRedux from './MessageForm/MessageForm'

const ChatWindow = (props) => {
    let messagesListElements = props.chatWindow.messagesData.map(messageItem => <MessageItem key={messageItem.id} message={messageItem.message}/>)
    let onSubmit = (values) => {
        props.addNewMessage(values.newMessage)
    }
    return(
        <section className={cs.chatWindow}>
            <ul className={cs.messagesList}>
                {messagesListElements}
            </ul>
            <MessageFormRedux onSubmit={onSubmit}/>
        </section>

    )
}

export default ChatWindow