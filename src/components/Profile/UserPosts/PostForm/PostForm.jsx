import React from 'react'
import { Field, reduxForm } from 'redux-form'

let PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                <span>Here you can make new post</span>
                <Field component={"textarea"} name={"newPost"} placeholder={"Start entering your post text"}/>  
            </label>
            <button>Add new Post</button>
        </form>
    )
}

let PostFormRedux = reduxForm({form: 'post'})(PostForm)

export default PostFormRedux
