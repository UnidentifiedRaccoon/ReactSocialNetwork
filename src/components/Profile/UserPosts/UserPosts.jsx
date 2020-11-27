import React from 'react'
// import cs from './UserPosts.module.css'
import {PostList__item as Post} from './PostList__item/PostList__item'
import PostFormRedux from './PostForm/PostForm'

const UserPosts = (props) => {
    let postsListElements = props.userPosts.postsData.map(post => <Post key={post.id} message={post.message} like={post.like} love={post.love}/>)

    let onSubmit = (values) => {
        props.addNewPost(values.newPost)
    }

    return (
        <section className='userPosts'>
            <b>My posts</b>
            <PostFormRedux onSubmit={onSubmit}/>
            <section className='postsFeed'>
                <ul className='postsFeed__list'>
                    {postsListElements}
                </ul>
            </section>

        </section>
    )
}

export default UserPosts