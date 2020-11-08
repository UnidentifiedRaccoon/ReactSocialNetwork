import React from 'react';
import cs from './UserItem.module.css'
import icon from '../../../img/anon.png'

const UserItem = (props) => {
    let user = props.data
    return (
        <li>
            <article>
                <div>
                    <img className={cs.icon} alt='UserIcon' src={user.photos.small != null ? user.photos.small : icon} />
                    { user.followed
                       ?<button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                </div>
                <div>
                    <div>
                        <b>{user.name}</b>
                        <i>{user.status}</i>
                    </div>
                    <div>
                        <span>{'user.location.country'}</span>
                        <span>{'user.location.town'}</span>
                    </div>
                </div>
            </article>
        </li>
    )

}

export default UserItem;