import React from 'react'
import { connect } from 'react-redux'
import Chats from './Chats'
import {Redirect} from 'react-router-dom'



class ChatsClassContainer extends React.Component {
    render() {
        if (!this.props.isAutorise) return <Redirect to='/Login'/>
        return (
          <Chats/>  
        )
    }

}

let mapStateToProps = (state) => ({
    isAutorise: state.auth.isAutorise,
})

const ChatsContainer = connect(mapStateToProps, {})(ChatsClassContainer)

export default ChatsContainer

