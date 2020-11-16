import Axios from 'axios'
import { follow } from '../redux/reducers/findUsersPage-reducer'

let instance = Axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '99a57e6e-836b-49fd-9baf-590d0b28fa72',
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
}) 

export const usersAPI = {
    getUsers: (currentPage, count) => {
       return  (
           instance.get(`/users?page=${currentPage}&count=${count}`)
           .then(Response => (Response.data))
           )
    } 
}

export const followAPI = {
    doFollow: (userId) => {
        return (
            instance.delete('/follow/' + userId)
            .then(Response => (Response.data))
        )
    },
    doUnfollow: (userId) => {
        return (
            instance.post('/follow/' + userId)
            .then(Response => (Response.data)) 
        )
    }
}

export const authAPI = {
    auth: () => {
        return (
            instance.get('https://social-network.samuraijs.com/api/1.0/auth/me')
        .then(Response => (Response.data)) 
        )
    }
}