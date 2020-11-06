import {combineReducers, createStore} from "redux"
import profilePageReducer from './reducers/profilePage-reducer'
import chatsPageReducer from './reducers/chatsPage-reducer'
import coursesPageReducer from './reducers/coursesPage-reducer'
import sideBarReducer from './reducers/sideBar-reducer'


let reducers = combineReducers({
        profilePage: profilePageReducer,
        chatsPage: chatsPageReducer,
        coursesPage: coursesPageReducer,
        sideBar: sideBarReducer,
    }
);

let store = createStore(reducers);

export default store