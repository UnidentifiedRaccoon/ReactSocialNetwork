import React from 'react';
import cs from './Header.module.css'

const Header = () => {
    return (
        <header className={cs.header}>
            <b>Chat&Code</b>
        </header>
    )
}

export {Header}