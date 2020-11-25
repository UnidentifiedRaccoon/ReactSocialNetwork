import React from 'react';
import StatusContainer from './Status/StatusContainer';
import cs from './UserInfo.module.css'

const UserInfo = (props) => {
    return (
        <section className='user-info'>
            <b>User info</b>
            <img src={props.profile.photos.small}/>
            <StatusContainer userId={props.profile.userId}/>
        </section>
    )
}

export default UserInfo