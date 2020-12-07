import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLength } from '../../../../utils/validators/validators'
import { Textarea } from '../../../Common/formControls/FormControls';

let maxLength50 = maxLength(50);

let MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                <span>Here you can write new message</span>
                <Field  component={Textarea} 
                        name={'newMessage'}    
                        placeholder={'start entering your message text'}
                        validate={[required, maxLength50]}/>
            </label>
             <button>Add message</button>
        </form>
    )
}

let MessageFormRedux = reduxForm({ form: 'message'})(MessageForm)

export default MessageFormRedux