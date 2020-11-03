import React from 'react'
import cs from './ChatWindow.module.css'
import  {MessageItem} from './MessageItem/MessageItem.jsx'

const ChatWindow = (props) => {
    let messagesListElements = props.data.messagesData.map(messageItem => <MessageItem key={messageItem.id} message={messageItem.message}/>)
    let textArea = React.createRef();
    let addNewMessage = () => {
       props.dispatch({type: 'ADD-NEW-MESSAGE'});
    }
    let onChangeNewMessage = () => {
        let text = textArea.current.value;
        let action = {type: 'ON-CHANGE-NEW-MESSAGE', newText: text};
        props.dispatch(action);
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