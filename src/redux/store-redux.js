import {applyMiddleware, combineReducers, createStore} from "redux"
import profilePageReducer from './reducers/profilePage-reducer'
import chatsPageReducer from './reducers/chatsPage-reducer'
import findUsersPageReducer from './reducers/findUsersPage-reducer'
import coursesPageReducer from './reducers/coursesPage-reducer'
import sideBarReducer from './reducers/sideBar-reducer'
import authReducer from "./reducers/auth-reducer"
import thunkMiddleWare from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'



let reducers = combineReducers({
        profilePage: profilePageReducer,
        chatsPage: chatsPageReducer,
        findUsersPage: findUsersPageReducer,
        coursesPage: coursesPageReducer,
        sideBar: sideBarReducer,
        auth: authReducer,
        form: formReducer,
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store

export default store