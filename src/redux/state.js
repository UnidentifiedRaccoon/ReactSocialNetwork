const ADD_NEW_POST = 'ADD-NEW-POST';
const ON_CHANGE_NEW_POST = 'ON-CHANGE-NEW-POST';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const ON_CHANGE_NEW_MESSAGE = 'ON-CHANGE-NEW-MESSAGE';

let store = {
    _state: {
        sideBar: {
            friendsOnline: {
                friendsData: [
                    {id: 0, icon: 'src', name: 'Spider-Man'},
                    {id: 1, icon: 'src', name: 'Ed Sheeran'},
                    {id: 2, icon: 'src', name: 'Симон'}
                ]
            }
        },
        profilePage: {
            userPosts: {
                postsData: [
                    {id: 0, message: "Hi it's my first post", like: 6, love: 1},
                    {id: 1, message: "Stop... This post should be first! What's happened!!!", like: 13, love: 8},
                    {id: 2, message: "Looks like someone make a mistake in code", like: -4, love: -5},
                ],
                newPostText: 'win'
            }
        },
        chatsPage: {
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
        },
        coursesPage: {
            coursesData: [
                {id: 0, title: 'Общая база'},
                {id: 1, title: 'Верстальщик'},
                {id: 2, title: 'Frontend разработчик'},
                {id: 3, title: 'Backend разработчик'},
                {id: 4, title: 'Fullstack разработчик'}
            ]
        }
    },
    _callSubscriber() {
        console.log("Произошла не передача Observer'a")
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    _addNewPost() {
        let newPost = {
            id: 2,
            message: this._state.profilePage.userPosts.newPostText,
            like: -4,
            love: -5
        };
        this._state.profilePage.userPosts.postsData.push(newPost);
        this._callSubscriber();
        this._state.profilePage.userPosts.newPostText = '';
    },
    _onChangeNewPost(newText) {
        this._state.profilePage.userPosts.newPostText = newText;
        this._callSubscriber();
    },
    _addNewMessage() {
        let newMessage = {
            id: 4,
            message: this._state.chatsPage.chatWindow.newMessageText
        };
        this._state.chatsPage.chatWindow.messagesData.push(newMessage);
        this._callSubscriber();
        this._state.chatsPage.chatWindow.newMessageText = '';
    },
    _onChangeNewMessage(newText) {
        this._state.chatsPage.chatWindow.newMessageText = newText;
        this._callSubscriber();
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_NEW_POST: this._addNewPost(); break;
            case ON_CHANGE_NEW_POST: this._onChangeNewPost(action.newText); break;
            case ADD_NEW_MESSAGE: this._addNewMessage(); break;
            case ON_CHANGE_NEW_MESSAGE: this._onChangeNewMessage(action.newText); break;
        }
    }
}

export const actionCreatorAddNewPost = () => ({type: ADD_NEW_POST});
export const actionCreatorOnChangeNewPost = (newText) =>
    ({type: ON_CHANGE_NEW_POST, newText});
export const actionCreatorAddNewMessage = () => ({type: ADD_NEW_MESSAGE});
export const actionCreatorOnChangeNewMessage = (newText) =>
    ({type: ON_CHANGE_NEW_MESSAGE, newText});

export {store}