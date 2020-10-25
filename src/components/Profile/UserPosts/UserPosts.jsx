import React from 'react'
// import cs from './UserPosts.module.css'
import {PostList__item as Post} from './PostList__item/PostList__item.jsx'


let postsData = [
    {id: 0, message: "Hi it's my first post", like: 6, love: 1},
    {id: 1, message: "Stop... This post should be first! What's happened!!!", like: 13, love: 8},
    {id: 2, message: "Looks like someone make a mistake in code", like: -4, love: -5},
]

const UserPosts = (props) => {
    {console.log(props)}
    let postsListElements = postsData.map(post => <Post key={post.id} message={post.message} like={post.like} love={post.love}/>)

    return (

        <section className='userPosts'>
            <b>My posts</b>
            <textarea defaultValue='Enter your text'></textarea>
            <input type='button' value='Add post'/>

            <section className='postsFeed'>
                <ul className='postsList'>
                    {postsListElements}
                </ul>
            </section>

        </section>
    )
}

export {UserPosts}