let initialState = {
    friendsOnline: {
        friendsData: [
            {id: 0, icon: 'src', name: 'Spider-Man'},
            {id: 1, icon: 'src', name: 'Ed Sheeran'},
            {id: 2, icon: 'src', name: 'Симон'}
        ]
    }
};

const sideBarReducer = (state=initialState) => {
    return state;
}

export default sideBarReducer;