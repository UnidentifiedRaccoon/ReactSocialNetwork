import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => ({
    isAutorized: state.auth.isAutorized,
})

const withAuthRedirect = (Component) => {
    class ComponentClassContainer extends React.Component {

        render() {
            if (!this.props.isAutorized) return <Redirect to='/Login'/>
            else {
               return  <Component {...this.props}/>             
            }

        }
    }
    let ComponentContainer = connect(mapStateToPropsForRedirect, {})(ComponentClassContainer)
    return ComponentContainer
}

export default withAuthRedirect;