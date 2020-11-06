import React from 'react'
import {ChatsContacts} from './ChatsContacts'
import Context from '../../../context'

const ChatsContactsContainer = () => {
    return (
        <Context.Consumer>
            {store => {
                let chatsContacts = store.getState().chatsPage.chatsContacts;
                return (
                    <ChatsContacts chatsContacts={chatsContacts}/>
                )
            }}
        </Context.Consumer>
    )
}

export {ChatsContactsContainer}

