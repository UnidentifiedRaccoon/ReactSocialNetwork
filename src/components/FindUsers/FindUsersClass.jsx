import React from 'react';
import cs from './FindUsers.module.css'
import icon from '../../img/anon.png'
import * as axios from 'axios'

class FindUsersClass extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }
    onClickActivatePage = (pageNumber) => {
        this.props.setActivePage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.count}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let totalCount = this.props.totalCount;
        let count = this.props.count;
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
                            return (<li className={`${cs.paginationItem} ${this.props.currentPage === item && cs.paginationItemActive}`}
                            onClick={(e) => {this.onClickActivatePage(item)}}>{item}</li>)
                        })
                    }

                </ul>
                <h2>Users</h2>
                <ul className={cs.usersList}>
                    {
                        this.props.usersData.map(user =>
                            <li key={user.id}>
                                <article>
                                    <div>
                                        <img className={cs.icon} alt='UserIcon'
                                             src={user.photos.small != null ? user.photos.small : icon}/>
                                        {user.followed
                                            ? <button onClick={() => {
                                                this.props.unfollow(user.id)
                                            }}>Unfollow</button>
                                            : <button onClick={() => {
                                                this.props.follow(user.id)
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
}

export default FindUsersClass