import React from 'react'
import {ChatsContacts} from './ChatsContacts'

const ChatsContactsContainer = (props) => {
    let chatsContacts = props.store.getState().chatsPage.chatsContacts;
    return (
        <ChatsContacts chatsContacts={chatsContacts}/>
    )
}

export {ChatsContactsContainer}

