let initialState = {
    coursesData: [
        {id: 0, title: 'Общая база'},
        {id: 1, title: 'Верстальщик'},
        {id: 2, title: 'Frontend разработчик'},
        {id: 3, title: 'Backend разработчик'},
        {id: 4, title: 'Fullstack разработчик'}
    ]
};

const coursesPageReducer = (state = initialState) => {
    return state;
}

export default coursesPageReducer;