import React, {Fragment} from 'react';
import './Task1.css'
import Backdrop from "./Backdrop/Backdrop";
const Modal = props => (
    <Fragment>
        <Backdrop
            show={props.show}
            onClick={props.close}
        />

        <div className="Modal" style={{transform: props.show ? 'translateY(0)': 'translateY(-100vh)', opacity: props.show ? '1': '0'} }>
            <h3 style={{borderBottom: "1px solid",paddingLeft:'20px'}}>{props.title}</h3>
            {props.children}
        </div>
    </Fragment>

);
export default Modal;