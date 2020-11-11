import React from 'react';
import loadingImg from '../../../assets/img/Loading.gif'

const Loading = (props) => {
    return (
        <div>
            <img src={props.isLoading ? loadingImg : null }/>
        </div>
    )
}

export default Loading
