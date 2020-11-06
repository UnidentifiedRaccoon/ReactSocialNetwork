import React from 'react'
import {ChatWindow} from './ChatWindow'
import {actionCreatorAddNewMessage, actionCreatorOnChangeNewMessage} from '../../../redux/reducers/chatsPage-reducer'
import Context from '../../../context'

const ChatWindowContainer = () => {
    return (
        <Context.Consumer>
            {store => {
                let chatWindow = store.getState().chatsPage.chatWindow;
                let onClickAddMessage = () => {
                    let action = actionCreatorAddNewMessage();
                    store.dispatch(action);
                }
                let onChangeUpdateMessage = (newText) => {
                    let action = actionCreatorOnChangeNewMessage(newText);
                    store.dispatch(action);
                }
                return (
                    <ChatWindow chatWindow={chatWindow}
                                onClickAddMessage={onClickAddMessage}
                                onChangeUpdateMessage={onChangeUpdateMessage}/>
                )
            }}
        </Context.Consumer>

    )
}

export {ChatWindowContainer}