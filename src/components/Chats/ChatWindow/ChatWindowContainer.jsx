import React from 'react'
import {ChatWindow} from './ChatWindow'
import {actionCreatorAddNewMessage, actionCreatorOnChangeNewMessage} from '../../../redux/reducers/chatsPage-reducer'

const ChatWindowContainer = (props) => {
    let chatWindow = props.store.getState().chatsPage.chatWindow;
    let onClickAddMessage = () => {
        let action = actionCreatorAddNewMessage();
        props.store.dispatch(action);
    }
    let onChangeUpdateMessage = (newText) => {
        let action = actionCreatorOnChangeNewMessage(newText);
        props.store.dispatch(action);
    }

    return(
        <ChatWindow chatWindow={chatWindow}
                    onClickAddMessage={onClickAddMessage}
                    onChangeUpdateMessage={onChangeUpdateMessage}/>
    )
}

export {ChatWindowContainer}