import React from 'react';
import cs from './CoursesList__item.module.css'

const CoursesList__item = (props) => {
    return(
        <li className='coursesList_item'>
            <article className='cours'>
                {props.title}
            </article>
        </li>
    )
}

export {CoursesList__item}