import React from 'react'
import { Field, reduxForm } from 'redux-form';
import cs from './LoginForm.module.css'


const LoginForm = (props) => {
    return (
            <form  className={cs.form} onSubmit={props.handleSubmit}>
                <label><span className={cs.labelText}>Login</span>
                <Field className={cs.input} component={"input"} name={"login"} placeholder={"Login"}/>
                </label>
                <label><span className={cs.labelText}>Password</span>
                <Field className={cs.input} component={"input"} name={"password"} type={"password"} placeholder={"Password"}/>
                </label>
                <label className={cs.checkboxLabel}>
                <Field className={cs.checkbox} component={"input"} name={"RememberMe"} type={"checkbox"}/>
                <span className={cs.labelText}>RememberMe</span>
                </label>
                <button className={cs.sendButton}>Send</button>
            </form>
        )
}

const LoginFormRedux = reduxForm({ form: 'login' })(LoginForm)

export default LoginFormRedux

// compose(
//     reduxForm({ form: 'login' })
// )(LoginForm)