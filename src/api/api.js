import Axios from 'axios'
import { follow } from '../redux/reducers/findUsersPage-reducer'

let instance = Axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '99a57e6e-836b-49fd-9baf-590d0b28fa72',
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
}) 

export const usersAPI = {
    getUsers: (currentPage, count) => {
       return  (
           instance.get(`users?page=${currentPage}&count=${count}`)
           .then(Response => (Response.data))
           )  
    } 
}

export const followAPI = {
    doFollow: (userId) => {
      return (
        instance.post('follow/' + userId)
        .then(Response => (Response.data)) 
        .catch(err => { 
            if (err.response) { 
              console.log('client received an error response (5xx, 4xx)')
              return('Что-то пошло не так, пожалуйста, обратитесь в службу поддержки сайта')
            } else if (err.request) { 
              alert('client never received a response, or request never left')
            } else { 
              alert('anything else')
            } 
          })
      )
    },
    doUnfollow: (userId) => {
      return (
        instance.delete('follow/' + userId)
        .then(Response =>(Response.data))
        .catch(err => { 
            if (err.response) { 
              console.log('client received an error response (5xx, 4xx)')
              return('Что-то пошло не так, пожалуйста, обратитесь в службу поддержки сайта')

            } else if (err.request) { 
              alert('client never received a response, or request never left')
            } else { 
              alert('anything else')
            } 
          })
      )
    }
}

export const authAPI = {
    auth: () => {
        return (
            instance.get('auth/me')
        .then(Response => (Response.data)) 
        )
    }
}

export const profileAPI = {
  getProfile: (userID) => {
    return(
      instance.get('profile/' + userID)
    )
  }

}