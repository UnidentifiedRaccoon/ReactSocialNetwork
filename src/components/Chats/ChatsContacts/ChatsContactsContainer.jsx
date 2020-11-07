import React from 'react'
import {ChatsContacts} from './ChatsContacts'
import {connect} from 'react-redux'


// const ChatsContactsContainer = () => {
//     return (
//         <Context.Consumer>
//             {store => {
//                 let chatsContacts = store.getState().chatsPage.chatsContacts;
//                 return (
//                     <ChatsContacts chatsContacts={chatsContacts}/>
//                 )
//             }}
//         </Context.Consumer>
//     )
// }

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

