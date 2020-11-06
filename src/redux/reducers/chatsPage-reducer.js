const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const ON_CHANGE_NEW_MESSAGE = 'ON-CHANGE-NEW-MESSAGE';

let initialState = {
    chatsContacts: {
        chatsData: [
            {id: 1, name: 'Ronin'},
            {id: 2, name: 'Mortis'},
            {id: 3, name: 'Sten_Li'},
            {id: 4, name: 'JonyJostar'},
            {id: 5, name: 'Riana'}
        ]
    },
    chatWindow: {
        messagesData: [
            {id: 0, message: 'Hello, world'},
            {id: 1, message: 'Thanos\'s snap'},
            {id: 2, message: 'Your interlocutor was annihilate'},
        ],
        newMessageText: 'pingvin'
    }
};


let addNewMessage = (state) => {
    let newMessage = {
        id: 4,
        message: state.chatWindow.newMessageText
    };
    state.chatWindow.messagesData.push(newMessage);
    state.chatWindow.newMessageText = '';
}
let onChangeNewMessage = (state, newText) => {
    state.chatWindow.newMessageText = newText;
}

const chatsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            addNewMessage(state);
            return state;
        }
        case ON_CHANGE_NEW_MESSAGE: {
            onChangeNewMessage(state, action.newText);
            return state;
        }
        default: {
            return state;
        }

    }
}

export const actionCreatorAddNewMessage = () => ({type: ADD_NEW_MESSAGE});
export const actionCreatorOnChangeNewMessage = (newText) =>
    ({type: ON_CHANGE_NEW_MESSAGE, newText});

export default chatsPageReducer