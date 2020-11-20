import React from 'react'
import { connect } from 'react-redux'
import Chats from './Chats'
import {Redirect} from 'react-router-dom'
import withAuthRedirect from '../../HOC/withAuthRedirect'



class ChatsClassContainer extends React.Component {
    render() {
        return (
          <Chats/>  
        )
    }

}

let mapStateToPropsForRedirect = (state) => ({
    isAutorise: state.auth.isAutorise,
})

let mapDispatchToPropsForRedirect = (dispatch) => ({

})

let ChatsRedirectContainer = withAuthRedirect(ChatsClassContainer)


let mapStateToProps = (state) => ({})

const ChatsContainer = connect(mapStateToProps, {})(ChatsRedirectContainer)

export default ChatsContainer

