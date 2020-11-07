import React from 'react'
import {ChatWindow} from './ChatWindow'
import {actionCreatorAddNewMessage, actionCreatorOnChangeNewMessage} from '../../../redux/reducers/chatsPage-reducer'
import {connect} from 'react-redux'

// const ChatWindowContainer = () => {
//     return (
//         <Context.Consumer>
//             {store => {
//                 let chatWindow = store.getState().chatsPage.chatWindow;
//                 let onClickAddMessage = () => {
//                     let action = actionCreatorAddNewMessage();
//                     store.dispatch(action);
//                 }
//                 let onChangeUpdateMessage = (newText) => {
//                     let action = actionCreatorOnChangeNewMessage(newText);
//                     store.dispatch(action);
//                 }
//                 return (
//                     <ChatWindow chatWindow={chatWindow}
//                                 onClickAddMessage={onClickAddMessage}
//                                 onChangeUpdateMessage={onChangeUpdateMessage}/>
//                 )
//             }}
//         </Context.Consumer>
//
//     )
// }

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