import {combineReducers, createStore} from "redux"
import profilePageReducer from './reducers/profilePage-reducer'
import chatsPageReducer from './reducers/chatsPage-reducer'
import findUsersPageReducer from './reducers/findUsersPage-reducer'
import coursesPageReducer from './reducers/coursesPage-reducer'
import sideBarReducer from './reducers/sideBar-reducer'
import authReducer from "./reducers/auth-reducer"


let reducers = combineReducers({
        profilePage: profilePageReducer,
        chatsPage: chatsPageReducer,
        findUsersPage: findUsersPageReducer,
        coursesPage: coursesPageReducer,
        sideBar: sideBarReducer,
        auth: authReducer
    }
);

let store = createStore(reducers);
window.store = store

export default store