import React from 'react'
import cs from './MessageItem.module.css'

const MessageItem = (props) => {
    return (
        <li className={cs.messageItem}>{props.message}</li>
    )
}

export {MessageItem}