import React from 'react'
import { Field, reduxForm } from 'redux-form';
import cs from './LoginForm.module.css'
import {required,  minLength, maxLength} from '../../../utils/validators/validators'
import { Input } from '../../Common/formControls/FormControls'

let maxLength20 = maxLength(20);
let minLength8 = minLength(8); 

const LoginForm = (props) => {
    return (
            <form  className={cs.form} onSubmit={props.handleSubmit}>
                <label><span className={cs.labelText}>Login</span>
                <Field  className={cs.input} 
                        component={Input} 
                        name={"login"}
                        placeholder={"Login"}
                        validate={[required, minLength8, maxLength20]}/>
                </label>
                <label><span className={cs.labelText}>Password</span>
                <Field  className={cs.input}
                        component={Input}    
                        name={"password"}
                        type={"password"} 
                        placeholder={"Password"}
                        validate={[required, minLength8, maxLength20]}/>
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