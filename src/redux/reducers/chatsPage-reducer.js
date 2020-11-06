const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const ON_CHANGE_NEW_MESSAGE = 'ON-CHANGE-NEW-MESSAGE';

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

const chatsPageReducer = (state, action) => {
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