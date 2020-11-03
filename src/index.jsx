import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css';
// import * as serviceWorker from './serviceWorker';
import {store} from './redux/state.js'



let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App data={store.getState()}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();