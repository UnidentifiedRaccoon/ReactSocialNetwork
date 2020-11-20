import { followAPI, usersAPI } from '../../api/api';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_ACTIVE_PAGE = 'SET-ACTIVE-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const SET_IS_LOADING = 'SET-IS-LOADING'
const SET_SUBSCRIPTION_IN_PROGRES = 'SET-SUBSCRIPTION-IN-PROGRES'


let initialState = {
    usersData: [],
    totalCount: 0,
    count: 10,
    currentPage: 1,
    isLoading: true,
    subscriptionInProgress: [],
};

const findUsersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                usersData: [...action.usersData]
            }
        }
        case SET_ACTIVE_PAGE: {
            return {
                ...state,
                currentPage: action.pageNumber,
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount,
            }
        }
        case SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading,
            }
        }
        case SET_SUBSCRIPTION_IN_PROGRES: {
            if (action.error) {
                console.log('Обработка ошибки в SET_SUBSCRIPTION_IN_PROGRES')
                return {
                    ...state,
                    subscriptionInProgress: state.subscriptionInProgress.filter(id => (id != action.userId))
                }
            }
            return {
                ...state,
                subscriptionInProgress: action.isFetching 
                    ? [...state.subscriptionInProgress, action.userId]
                    : state.subscriptionInProgress.filter(id => (id != action.userId))

            }
        }
        default: {
            return state
        }
    }
}

export default findUsersPageReducer

export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, usersData: users})
export const setActivePage = (pageNumber) => ({type: SET_ACTIVE_PAGE, pageNumber})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading})
export const setSubscriptionInProgress = (isFetching, userId, error=false) => ({type: SET_SUBSCRIPTION_IN_PROGRES, isFetching, userId, error})

export const firstGetUsersThunkCreator = (pageNumber,count) => (dispatch) => {
    dispatch(setIsLoading(true));
    usersAPI.getUsers(pageNumber, count)
        .then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
            dispatch(setIsLoading(false));
        })
}


export const getUsersThunkCreator = (pageNumber,count) => (dispatch) => {
    dispatch(setActivePage(pageNumber));
    dispatch(setIsLoading(true));
    usersAPI.getUsers(pageNumber, count)
        .then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
            dispatch(setIsLoading(false));
        })
}

let showSystemMessage = (message) => { // Для информирования об ошибках в followTC и unfollowTC
    alert(message);
}

export const unfollowTC = (userId) => (dispatch) => { 
    dispatch(setSubscriptionInProgress(true, userId));
    followAPI.doUnfollow(userId)
    .then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollow(userId));
            dispatch(setSubscriptionInProgress(false, userId));    
        } else {
            dispatch(showSystemMessage(data));
            dispatch(setSubscriptionInProgress(false, userId, true));   
        }
    })
}



export const followTC = (userId) => (dispatch) => {
    dispatch(setSubscriptionInProgress(true, userId));
    followAPI.doFollow(userId)
    .then(data => {
        if (data.resultCode === 0) {
            dispatch(follow(userId));
            dispatch(setSubscriptionInProgress(false, userId));  
        } else {
            dispatch(showSystemMessage(data));
            dispatch(setSubscriptionInProgress(false, userId, true));  
        }
    })
}

