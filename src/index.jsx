import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css';
// import * as serviceWorker from './serviceWorker';
import {state, addNewPost, onChangeNewPost, addNewMessage, onChangeMessage, subscribe} from './redux/state'

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App data={state}
                 addNewPost={addNewPost}
                 onChangeNewPost={onChangeNewPost}
                 addNewMessage={addNewMessage}
                 onChangeMessage={onChangeMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
subscribe(rerenderEntireTree)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
