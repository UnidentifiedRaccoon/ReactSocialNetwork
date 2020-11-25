import React from 'react';

const Status = (props) => {
    console.log(props)
    return (
        <div>
            {   
                props.statusEditMode 
                ? <input autoFocus={true} onChange={props.updataStatus} onBlur={props.finishEditStatus} value={props.localStatusText}/>
                : <span onDoubleClick={props.startEditStatus}>{props.statusText || '-------'}</span>
            }
        </div>
    )
}

export default Status
          
          
 