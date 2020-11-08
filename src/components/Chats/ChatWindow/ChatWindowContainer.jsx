import React from 'react'
import {ChatWindow} from './ChatWindow'
import {actionCreatorAddNewMessage, actionCreatorOnChangeNewMessage} from '../../../redux/reducers/chatsPage-reducer'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        chatWindow: state.chatsPage.chatWindow,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onClickAddMessage: () => {
            let action = actionCreatorAddNewMessage();
            dispatch(action);
        },
        onChangeUpdateMessage: (newText) => {
            let action = actionCreatorOnChangeNewMessage(newText);
            dispatch(action);
        }
    }
}

const ChatWindowContainer = connect(mapStateToProps, mapDispatchToProps)(ChatWindow)

export {ChatWindowContainer}