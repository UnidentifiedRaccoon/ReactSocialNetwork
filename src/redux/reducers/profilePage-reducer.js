const ADD_NEW_POST = 'ADD-NEW-POST';
const ON_CHANGE_NEW_POST = 'ON-CHANGE-NEW-POST';

let addNewPost = (state) => {
    let newPost = {
        id: 2,
        message: state.userPosts.newPostText,
        like: -4,
        love: -5
    };
    state.userPosts.postsData.push(newPost);
    state.userPosts.newPostText = '';
}


let onChangeNewPost = (state, newText) => {
    state.userPosts.newPostText = newText;
}

const profilePageReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            addNewPost(state);
            return state;
        case ON_CHANGE_NEW_POST: {
            onChangeNewPost(state, action.newText);return state;
        }
        return state;
    }
}

export const actionCreatorAddNewPost = () => ({type: ADD_NEW_POST});
export const actionCreatorOnChangeNewPost = (newText) =>
    ({type: ON_CHANGE_NEW_POST, newText});

export default profilePageReducer;