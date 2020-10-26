import React from 'react';
import {CoursesList__item as Course} from './CoursesList__item/CoursesList__item'


const Courses = (props) => {

    let coursesListElements = props.data.coursesData.map(course => <Course key={course.id} title={course.title}/>)
    return (
        <main className='courses'>
            <ul className='coursesList'>
                {coursesListElements}
            </ul>
        </main>
    )
}

export {Courses}