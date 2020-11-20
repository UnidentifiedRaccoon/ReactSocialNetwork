import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => ({
    isAutorise: state.auth.isAutorise,
})

const withAuthRedirect = (Component) => {
    class ComponentClassContainer extends React.Component {

        render() {
            if (!this.props.isAutorise) return <Redirect to='/Login'/>
            return  <Component {...this.props}/>
        }
    }
    let ComponentContainer = connect(mapStateToPropsForRedirect, {})(ComponentClassContainer)
    return ComponentContainer
}

export default withAuthRedirect;