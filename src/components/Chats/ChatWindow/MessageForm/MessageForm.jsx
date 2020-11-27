import { render } from '@testing-library/react'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

let MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                <span>Here you can write new message</span>
                <Field component={'textarea'} name={'newMessage'} placeholder={'start entering your message text'}/>
            </label>
             <button>Add message</button>
        </form>
    )
}

let MessageFormRedux = reduxForm({ form: 'message'})(MessageForm)

export default MessageFormRedux