import React from 'react'
import cs from './FormControls.module.css'

const FieldControls = ({input, meta, children, ...props}) => {
    let isError = meta.touched && meta.error
    
    let element = React.cloneElement(children, {
                                                ...input, 
                                                ...props, 
                                                className: props.className + " " 
                                                + (isError && cs.error)});
    return (
        <div className={cs.formControl}>
            { element }
            {isError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = (props) => <FieldControls {...props} children={<input/>}></FieldControls>
export const Textarea = (props) => <FieldControls {...props} children={<textarea/>}></FieldControls>
