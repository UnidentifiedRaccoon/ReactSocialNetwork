import React from 'react'
import Chats from './Chats'
import withAuthRedirect from '../../HOC/withAuthRedirect'
import { compose } from 'redux'



class ChatsContainer extends React.Component {
    render() {
        return (
          <Chats/>  
        )
    }

}

export default compose(
  withAuthRedirect,
)(ChatsContainer)


