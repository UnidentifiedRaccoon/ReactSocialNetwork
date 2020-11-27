const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

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
    }
};


const chatsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.messageText
            };     
            return {
                ...state,
                chatWindow: {
                    ...state.chatWindow,
                    messagesData: [...state.chatWindow.messagesData, newMessage],
                },
            }
        default: return state;

    }
}

export const addNewMessage = (messageText) => ({type: ADD_NEW_MESSAGE, messageText});

export default chatsPageReducer;