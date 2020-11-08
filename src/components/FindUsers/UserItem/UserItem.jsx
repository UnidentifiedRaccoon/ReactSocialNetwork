import React from 'react';
import cs from './UserItem.module.css'

const UserItem = (props) => {
    let user = props.data
    return (
        <li>
            <article>
                <div>
                    <img className={cs.icon} alt='UserIcon' src={user.imgSrc}/>
                    { user.followed
                       ?<button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                </div>
                <div>
                    <div>
                        <b>{user.nickName}</b>
                        <i>{user.status}</i>
                    </div>
                    <div>
                        <span>{user.location.country}</span>
                        <span>{user.location.town}</span>
                    </div>
                </div>
            </article>
        </li>
    )

}

export default UserItem;