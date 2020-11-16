import React from 'react';
import cs from './FindUsers.module.css'
import icon from '../../assets/img/anon.png'
import {NavLink} from 'react-router-dom'
import { followAPI } from '../../api/api';

const FindUsers = (props) => {
    let totalCount = props.totalCount;
    let count = props.count;
    let pagesCount = Math.ceil(totalCount / count);
    let pageNumbersArr = [];
    for (let i = 1; i <= pagesCount; i++) {
        pageNumbersArr.push(i)
    }

    return (
        <section>
            <span>Pagination</span>
            <ul className={cs.paginationList}>
                {
                    pageNumbersArr.map(item => {
                        return (<li className={`${cs.paginationItem} ${props.currentPage === item && cs.paginationItemActive}`}
                                    onClick={(e) => {props.onClickActivatePage(item)}}>{item}</li>)
                    })
                }

            </ul>
            <h2>Users</h2>
            <ul className={cs.usersList}>
                {
                    props.usersData.map(user =>
                        <li key={user.id}>
                            <article>
                                <div>
                                    <NavLink to={'/profile/' + user.id}>
                                        <img className={cs.icon} alt='UserIcon'
                                             src={user.photos.small != null ? user.photos.small : icon}/>
                                    </NavLink>


                                    {user.followed
                                        ? <button onClick={(e) => {
                                            followAPI.doFollow(user.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(user.id)
                                                }
                                            })
                                        }}>Unfollow</button>
                                        : <button onClick={(e) => {
                                            followAPI.doUnfollow(user.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(user.id)
                                                }
                                        })
                                        }}>Follow</button>}
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
                        </li>)
                }
            </ul>
            <button>Show more users</button>
        </section>
    )
}

export default FindUsers