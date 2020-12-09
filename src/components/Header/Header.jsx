import React from 'react';
import { NavLink } from 'react-router-dom';
import cs from './Header.module.css'

const Header = (props) => {
    return (
            <header className={cs.header}>
                <b>Chat&Code</b>
                <div className={cs.loginBlock}>
                    {
                        props.isAutorise
                        ? <div>
                            <span>{props.login}</span>
                            <button onClick={props.logout}>Logout</button>
                          </div>


                        : <NavLink to='/login'>Login</NavLink>
                    }
                </div>
            </header>
        )
}

export default Header;