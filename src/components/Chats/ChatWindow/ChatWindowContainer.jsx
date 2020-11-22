import React from 'react'
import {ChatWindow} from './ChatWindow'
import {addNewMessage, updateNewMessage} from '../../../redux/reducers/chatsPage-reducer'
import {connect} from 'react-redux'
import { compose } from 'redux'

class ChatsWindowContainer extends React.Component {
    render() {
        return <ChatWindow {...this.props}/>
    }    
}

let mapStateToProps = (state) => {
    return {
        chatWindow: state.chatsPage.chatWindow,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            addNewMessage, 
            updateNewMessage,
        })
)(ChatsWindowContainer)