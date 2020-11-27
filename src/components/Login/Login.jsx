import React from 'react';
import LoginFormRedux from './LoginForm/LoginForm.jsx'
import cs from './Login.module.css'

let onSubmit = () => {
    alert('SEND')
}

const Login = (props) => {
    return (
            <main className={cs.login}>
                <h1>Login</h1>
                <p>Only logged in users can see all pages</p>
                <LoginFormRedux onSubmit={onSubmit}/>
            </main>
        )
}

export default Login;