import React from 'react';
import {CoursesList__item as Course} from './CoursesList__item/CoursesList__item'
import cs from './Courses.module.css'


const Courses = (props) => {

    let coursesListElements = props.data.coursesData.map(course => <Course key={course.id} title={course.title}/>)
    return (
        <main className={cs.courses}>
            <ul className='courses__list'>
                {coursesListElements}
            </ul>
        </main>
    )
}

export {Courses}