import React from 'react'
import cs from './PostList__item.module.css'

const PostList__item = (props) => {
    return(
        <li className={cs.postList__item}>
            <article className={cs.post}>
                <p>
                    {props.message}
                </p>
                <span className={cs.like}>Like {props.like}</span>
                <span className={cs.love}>Your post catch my heart {props.love}</span>
            </article>
        </li>


    )
}

export {PostList__item}