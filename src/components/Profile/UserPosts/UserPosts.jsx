import React from 'react'
// import cs from './UserPosts.module.css'
import {PostList__item as Post} from './PostList__item/PostList__item.jsx'

const UserPosts = (props) => {
    let postsListElements = props.data.postsData.map(post => <Post key={post.id} message={post.message} like={post.like} love={post.love}/>)
    let textArea = React.createRef()
    let addNewPost = () => {
        props.addNewPost()
    }

    let onChangeNewPost = () => {
        let text = textArea.current.value
        props.onChangeNewPost(text)
    }

    return (
        <section className='userPosts'>
            <b>My posts</b>
            <textarea onChange={onChangeNewPost} ref={textArea} value={props.data.newPostText}/>
            <input type='button' value='Add post' onClick={addNewPost}/>

            <section className='postsFeed'>
                <ul className='postsList'>
                    {postsListElements}
                </ul>
            </section>

        </section>
    )
}

export {UserPosts}