import React, {Fragment} from 'react';
import AlertBackdrop from "./AlertBackdrop";
const Alert = props => (

   <Fragment>
       <AlertBackdrop
           show={props.show}
           dismiss={props.dismiss}
       />

       <div className={props.type} style={{transform: props.show ? 'translateY(0)': 'translateY(-100vh)', opacity: props.show ? '1': '0'} }>
           {props.children}

            <button onClick={props.onclick} style={{disply: props.dismiss ? 'none': 'block'}}>aa</button>
       </div>
   </Fragment>
);

export default Alert;