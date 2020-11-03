let rerenderEntireTree = () => {
    console.log('Дерево должно было обновиться')
}

let state = {
    sideBar: {
        friendsOnline: {
            friendsData: [
                {id: 0, icon: 'src', name: 'Spider-Man' },
                {id: 1, icon: 'src', name: 'Ed Sheeran' },
                {id: 2, icon: 'src', name: 'Симон' }
            ]
        }
    },
    profilePage:  {
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
}

// let store = {
//     _state: {
//         sideBar: {
//             friendsOnline: {
//                 friendsData: [
//                     {id: 0, icon: 'src', name: 'Spider-Man' },
//                     {id: 1, icon: 'src', name: 'Ed Sheeran' },
//                     {id: 2, icon: 'src', name: 'Симон' }
//                 ]
//             }
//         },
//         profilePage:  {
//             userPosts: {
//                 postsData: [
//                     {id: 0, message: "Hi it's my first post", like: 6, love: 1},
//                     {id: 1, message: "Stop... This post should be first! What's happened!!!", like: 13, love: 8},
//                     {id: 2, message: "Looks like someone make a mistake in code", like: -4, love: -5},
//                 ],
//                 newPostText: 'win'
//             }
//         },
//         chatsPage: {
//             chatsContacts: {
//                 chatsData: [
//                     {id: 1, name: 'Ronin'},
//                     {id: 2, name: 'Mortis'},
//                     {id: 3, name: 'Sten_Li'},
//                     {id: 4, name: 'JonyJostar'},
//                     {id: 5, name: 'Riana'}
//                 ]
//             },
//             chatWindow: {
//                 messagesData: [
//                     {id: 0, message: 'Hello, world'},
//                     {id: 1, message: 'Thanos\'s snap'},
//                     {id: 2, message: 'Your interlocutor was annihilate'},
//                 ],
//                 newMessageText: 'pingvin'
//             }
//         },
//         coursesPage: {
//             coursesData: [
//                 {id: 0, title: 'Общая база'},
//                 {id: 1, title: 'Верстальщик'},
//                 {id: 2, title: 'Frontend разработчик'},
//                 {id: 3, title: 'Backend разработчик'},
//                 {id: 4, title: 'Fullstack разработчик'}
//             ]
//         }
//     },
//     _rerenderEntireTree() {
//         console.log("Произошла не передача Observer'a")
//     },
//     subscribe(observer) {
//         this._rerenderEntireTree = observer
//     },
//     addNewPost() {
//         let newPost = {
//             id: 2,
//             message: this._state.profilePage.userPosts.newPostText,
//             like: -4,
//             love: -5
//         };
//         this._state.profilePage.userPosts.postsData.push(newPost);
//         this._rerenderEntireTree();
//         this._state.profilePage.userPosts.newPostText = '';
//     },
//     onChangeNewPost(text) {
//         this._state.profilePage.userPosts.newPostText = text;
//         this._rerenderEntireTree();
//     },
//     addNewMessage() {
//         let newMessage = {
//             id: 4,
//             message: this._state.chatsPage.chatWindow.newMessageText
//         };
//         this._state.chatsPage.chatWindow.messagesData.push(newMessage)
//         this._rerenderEntireTree()
//         this._state.chatsPage.chatWindow.newMessageText = ''
//     },
//     onChangeNewMessage(text) {
//         this._state.chatsPage.chatWindow.newMessageText = text
//         this._rerenderEntireTree()
//     }
// }


const addNewPost = () => {
    let newPost = {
        id: 2,
        message: state.profilePage.userPosts.newPostText,
        like: -4,
        love: -5
    };
    state.profilePage.userPosts.postsData.push(newPost);
    rerenderEntireTree();
    state.profilePage.userPosts.newPostText = '';
}

const onChangeNewPost = (text) => {
    state.profilePage.userPosts.newPostText = text;
    rerenderEntireTree();
}

const addNewMessage = () => {
    let newMessage = {
        id: 4,
        message: state.chatsPage.chatWindow.newMessageText
    };
    state.chatsPage.chatWindow.messagesData.push(newMessage)
    rerenderEntireTree()
    state.chatsPage.chatWindow.newMessageText = ''
}

const onChangeNewMessage = (text) => {
    state.chatsPage.chatWindow.newMessageText = text
    rerenderEntireTree()
}

const subscribe = (observer) => { // first learned pattern observer
    rerenderEntireTree = observer
}

export {state,
    addNewPost,
    onChangeNewPost,
    addNewMessage,
    onChangeNewMessage,
    subscribe}