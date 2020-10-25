import React from 'react'
import cs from './MessagesList__item.module.css'

const MessagesList__item = (props) => {
    return (
        <li className={cs.messagesList__item}>{props.text}</li>
    )
}

export {MessagesList__item}