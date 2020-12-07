import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLength} from '../../../../utils/validators/validators'
import { Textarea } from '../../../Common/formControls/FormControls';

let maxLength50 = maxLength(50);

let PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                <span>Here you can make new post</span>
                <Field component={Textarea} 
                        name={"newPost"} 
                        placeholder={"Start entering your post text"}
                        validate={[required, maxLength50]}/>  
            </label>
            <button>Add new Post</button>
        </form>
    )
}

export default reduxForm({form: 'post'})(PostForm)
