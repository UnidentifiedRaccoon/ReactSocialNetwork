import React from 'react'
import cs from './ChatWindow.module.css'
import  {MessageItem} from './MessageItem/MessageItem.jsx'

const ChatWindow = (props) => {
    let messagesListElements = props.data.messagesData.map(messageItem => <MessageItem key={messageItem.id} message={messageItem.message}/>)
    let textArea = React.createRef();
    let addNewMessage = () => {
       let text = textArea.current.value
       props.addNewMessage(text)
    }
    let onChangeNewMessage = () => {
        let text = textArea.current.value
        props.onChangeNewMessage(text)
    }

    return(
        <section className={cs.chatWindow}>
            <ul className={cs.messagesList}>
                {messagesListElements}
            </ul>
            <textarea onChange={onChangeNewMessage} ref={textArea} value={props.data.newMessageText}></textarea>
            <button onClick={addNewMessage}>Add message</button>
        </section>

    )
}

export {ChatWindow}