import React from 'react'
// import cs from './UserPosts.module.css'
import {PostList__item as Post} from './PostList__item/PostList__item.jsx'

const UserPosts = (props) => {
    {console.log(props)}
    let postsListElements = props.data.postsData.map(post => <Post key={post.id} message={post.message} like={post.like} love={post.love}/>)

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