import React from 'react'
import {ChatsContacts} from './ChatsContacts'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        chatsContacts: state.chatsPage.chatsContacts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const ChatsContactsContainer = connect(mapStateToProps, mapDispatchToProps)(ChatsContacts);

export {ChatsContactsContainer}

