import React from 'react';
import UserItem from './UserItem/UserItem'
import cs from './FindUsers.module.css'
import * as axios from 'axios'

const FindUsers = (props) => {
    let setUsers = () => {
        if (props.usersData.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {(props.setUsers(response.data.items))})
        }
    }
    let usersListElements = props.usersData.map(user => <UserItem data={user} follow={props.follow}
                                                                  unfollow={props.unfollow}/>);
    return (
        <section>
            <h2>Users</h2>
            <button onClick={setUsers}>Set Users</button>
            <ul className={cs.usersList}>
                {usersListElements}
            </ul>
            <button>Show more users</button>
        </section>
    )
}

export default FindUsers