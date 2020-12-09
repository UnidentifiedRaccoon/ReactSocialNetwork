import React from 'react';
import LoginForm from './LoginForm/LoginForm.jsx'
import cs from './Login.module.css'

const Login = (props) => {
    let onSubmit = (values) => {
        props.login(values.email, values.password, values.rememberMe)
        
    }
    return (
            <main className={cs.login}>
                <h1>Login</h1>
                <p>Only logged in users can see all pages</p>
                <LoginForm onSubmit={onSubmit}/>
            </main>
        )
}

export default Login;