import React from 'react';
import UserItem from './UserItem/UserItem'
import cs from './FindUsers.module.css'

const FindUsers = (props) => {
    if (props.usersData.length === 0) {
        props.setUsers([
            {
                id: 0,
                nickName: 'Mouse',
                gender: 'female',
                location: {country: 'UK', town: 'Brighton'},
                followed: true,
                imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png',
                status: 'You never find me!',
            },
            {
                id: 1,
                nickName: 'Boogeyman',
                gender: 'non-gender',
                location: {country: 'Moon', town: 'MoonSity'},
                followed: false,
                imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png',
                status: 'You never find me!',
            },
            {
                id: 2,
                nickName: 'Someone',
                gender: 'male',
                location: {country: 'Russia', town: 'No-town'},
                followed: true,
                imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png',
                status: 'You never find me!',
            },
        ])
    }
    let usersListElements = props.usersData.map(user => <UserItem data={user} follow={props.follow} unfollow={props.unfollow}/>);
    return (
        <section>
            <h2>Users</h2>
            <ul className={cs.usersList}>
                {usersListElements}
            </ul>
            <button>Show more users</button>
        </section>
    )
}

export default FindUsers