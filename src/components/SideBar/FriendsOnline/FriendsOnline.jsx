import React from 'react';
import cs from './FriendsOnline.module.css'
import  {FriendItem} from './FriendItem/FriendItem.jsx'


let FriendsOnline = (props) => {
    let friendsOnlineListElements = props.data.friendsData.map(friendItem => <FriendItem key={friendItem.id} icon={friendItem.icon} name={friendItem.name}/>)
    return (
        <section className='friendsOnline'>
            <b>Друзья онлайн</b>
            <ul className='friendsOnline__list'>
                {friendsOnlineListElements}
            </ul>
        </section>
    )
}

export {FriendsOnline}
