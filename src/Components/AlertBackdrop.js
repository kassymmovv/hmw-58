import React from 'react';
import './AlertBackdrop.css';
const AlertBackdrop = (props, {show,dismiss}) => (
            show ? <div className={props.type} onClick={dismiss}/>:null
);

export default AlertBackdrop;