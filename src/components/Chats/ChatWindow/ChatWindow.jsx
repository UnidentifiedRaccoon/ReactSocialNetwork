import React from 'react'
import cs from './ChatWindow.module.css'
import  {MessageItem} from './MessageItem/MessageItem.jsx'
import {actionCreatorAddNewMessage, actionCreatorOnChangeNewMessage} from '../../../redux/reducers/chatsPage-reducer'

const ChatWindow = (props) => {
    let messagesListElements = props.data.messagesData.map(messageItem => <MessageItem key={messageItem.id} message={messageItem.message}/>)
    let textArea = React.createRef();
    let addNewMessage = () => {
        let action = actionCreatorAddNewMessage();
        props.dispatch(action);
    }
    let onChangeNewMessage = () => {
        let newText = textArea.current.value;
        let action = actionCreatorOnChangeNewMessage(newText);
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