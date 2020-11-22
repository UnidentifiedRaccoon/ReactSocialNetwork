import React from 'react'
import cs from './ChatWindow.module.css'
import  {MessageItem} from './MessageItem/MessageItem.jsx'

const ChatWindow = (props) => {
    let messagesListElements = props.chatWindow.messagesData.map(messageItem => <MessageItem key={messageItem.id} message={messageItem.message}/>)
    let textArea = React.createRef();
    let updateNewMessage = () => {
        let newText = textArea.current.value;
        props.updateNewMessage(newText);
    }

    return(
        <section className={cs.chatWindow}>
            <ul className={cs.messagesList}>
                {messagesListElements}
            </ul>
            <textarea onChange={updateNewMessage} ref={textArea} value={props.chatWindow.newMessageText}></textarea>
            <button onClick={props.addNewMessage}>Add message</button>
        </section>

    )
}

export {ChatWindow}