import React from 'react';
import {CoursesList__item as Course} from './CoursesList__item/CoursesList__item'

let coursesData = [
    {id: 0, title: 'Общая база'},
    {id: 1, title: 'Верстальщик'},
    {id: 2, title: 'Frontend разработчик'},
    {id: 3, title: 'Backend разработчик'},
    {id: 4, title: 'Fullstack разработчик'}
]

const Courses = (props) => {

    let coursesListElements = coursesData.map(course => <Course key={course.id} title={course.title}/>)
    return (
        <main className='courses'>
            <ul className='coursesList'>
                {coursesListElements}
            </ul>
        </main>
    )
}

export {Courses}