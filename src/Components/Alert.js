import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:'50px'}}>
            {props.alert && <div className = {`alert alert-${props.alert.type}`} role="alert">
            <h6>{props.alert.message}</h6>
         </div>}
        </div>
    )
}
