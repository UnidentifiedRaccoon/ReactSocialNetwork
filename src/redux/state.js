let state = {
    profilePage:  {
        userPosts: {
            postsData: [
                {id: 0, message: "Hi it's my first post", like: 6, love: 1},
                {id: 1, message: "Stop... This post should be first! What's happened!!!", like: 13, love: 8},
                {id: 2, message: "Looks like someone make a mistake in code", like: -4, love: -5},
            ]
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
                {id: 0, text: 'Hello, world'},
                {id: 1, text: 'Thanos\'s snap'},
                {id: 2, text: 'Your interlocutor was annihilate'},
            ]
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

export {state}