import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Status from './Status';
import {getStatus, setUpdateStatus} from '../../../../redux/reducers/profilePage-reducer'

class StatusContainer extends React.Component {
    state = {
        statusEditMode: false,
        statusText: this.props.statusText,
    }

    componentDidMount() {
        this.props.getStatus(this.props.userId)
        this.setState({
            statusText: this.props.statusText,
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.statusText !== this.props.statusText) {
            this.setState({
                statusText: this.props.statusText,
            })   
        }

    }

    startEditStatus = () => {
        this.setState({
            statusEditMode: true,
        })
    }

    finishEditStatus = () => {
        this.setState({
            statusEditMode: false,
        })
        this.props.setUpdateStatus(this.state.statusText)
    }

    updataStatus = (e) => {
        this.setState({
            statusText: e.currentTarget.value
        }) 
    }

    render() {
        return <Status  statusEditMode={this.state.statusEditMode} 
                        startEditStatus={this.startEditStatus}
                        finishEditStatus={this.finishEditStatus}
                        statusText={this.props.statusText}
                        localStatusText={this.state.statusText}
                        updataStatus={this.updataStatus}/>
    }
}


let mapStateToProps = (state) => {
    console.log(state)
    return {
        statusText: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {getStatus, setUpdateStatus})
)(StatusContainer)