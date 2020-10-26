import React from 'react';
import {CoursesList__item as Course} from './CoursesList__item/CoursesList__item'


const Courses = (props) => {
    // {debugger}

    let coursesListElements = props.data.map(course => <Course key={course.id} title={course.title}/>)
    return (
        <main className='courses'>
            <ul className='coursesList'>
                {coursesListElements}
            </ul>
        </main>
    )
}

export {Courses}