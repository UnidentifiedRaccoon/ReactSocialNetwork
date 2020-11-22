import React from 'react'
import ChatsContacts from './ChatsContacts'
import {connect} from 'react-redux'
import { compose } from 'redux'

class ChatsContactsContainer extends React.Component {
    render() {
        return <ChatsContacts {...this.props}/>
    }    
}


let mapStateToProps = (state) => {
    return {
        chatsContacts: state.chatsPage.chatsContacts,
    }
}

export default compose(
    connect(mapStateToProps, {}),
)(ChatsContactsContainer)

