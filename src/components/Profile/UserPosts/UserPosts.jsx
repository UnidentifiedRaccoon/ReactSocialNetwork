import React from 'react'
// import cs from './UserPosts.module.css'
import {PostList__item as Post} from './PostList__item/PostList__item'

const UserPosts = (props) => {
    let postsListElements = props.userPosts.postsData.map(post => <Post key={post.id} message={post.message} like={post.like} love={post.love}/>)
    let textArea = React.createRef()
    let updateNewPost = () => {
        let newText = textArea.current.value;
        props.updateNewPost(newText);
    }

    return (
        <section className='userPosts'>
            <b>My posts</b>
            <textarea onChange={updateNewPost} ref={textArea} value={props.userPosts.newPostText}/>
            <input type='button' value='Add post' onClick={props.addNewPost}/>

            <section className='postsFeed'>
                <ul className='postsFeed__list'>
                    {postsListElements}
                </ul>
            </section>

        </section>
    )
}

export default UserPosts