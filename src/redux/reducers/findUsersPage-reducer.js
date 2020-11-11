const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_ACTIVE_PAGE = 'SET-ACTIVE-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const SET_IS_LOADING = 'SET-IS-LOADING'


let initialState = {
    usersData: [],
    totalCount: 0,
    count: 5,
    currentPage: 1,
    isLoading: true,
};

const findUsersPageReducer = (state = initialState, action) => {
    window.state = state;
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
        default: {
            return state
        }
    }
}

export default findUsersPageReducer

export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users) => ({type: SET_USERS, usersData: users})
export const setActivePageAC = (pageNumber) => ({type: SET_ACTIVE_PAGE, pageNumber})
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const setIsLoadingAC = (isLoading) => ({type: SET_IS_LOADING, isLoading})



