import React from 'react';
import cs from './UserInfo.module.css'

const UserInfo = (props) => {

    return (
        <section className='user-info'>
            <div>
                {/*<img alt='Wallpaper' src='https://hi-tech.ua/wp-content/uploads/2020/05/Facebook-design.jpg'/>*/}
            </div>
            <b>User info</b>
            <img src={props.profile.photos.small}/>
        </section>
    )
}

export {UserInfo}