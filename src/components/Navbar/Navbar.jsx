import React from 'react';
import cs from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={cs.siteNav}>
            <ul className={cs.navList}>
                <li className={cs.navList__item}>
                    <NavLink to='/Profile' className={cs.navList__link} activeClassName={cs.navList__link_active}>Profile</NavLink>
                </li>
                <li className={cs.navList__item}>
                    <NavLink to='/Chats' className={cs.navList__link} activeClassName={cs.navList__link_active}>Chats</NavLink>
                </li>
                <li className={cs.navList__item}>
                    <NavLink to='/Courses' className={cs.navList__link} activeClassName={cs.navList__link_active}>Courses</NavLink>
                </li>
                <li className={cs.navList__item}>Friends</li>
                <li className={cs.navList__item}>Settings</li>
                <li className={cs.navList__item}>Support and FAQ</li>
            </ul>
        </nav>
    )
}

export {Navbar}
