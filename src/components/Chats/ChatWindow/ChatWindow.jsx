import React from 'react'
import cs from './ChatWindow.module.css'
import  {MessageItem} from './MessageItem/MessageItem.jsx'

const ChatWindow = (props) => {
    let messagesListElements = props.chatWindow.messagesData.map(messageItem => <MessageItem key={messageItem.id} message={messageItem.message}/>)
    let textArea = React.createRef();
    let onClickAddMessage = () => {
        props.onClickAddMessage()
    }
    let onChangeUpdateMessage = () => {
        let newText = textArea.current.value;
        props.onChangeUpdateMessage(newText);
    }

    return(
        <section className={cs.chatWindow}>
            <ul className={cs.messagesList}>
                {messagesListElements}
            </ul>
            <textarea onChange={onChangeUpdateMessage} ref={textArea} value={props.chatWindow.newMessageText}></textarea>
            <button onClick={onClickAddMessage}>Add message</button>
        </section>

    )
}

export {ChatWindow}