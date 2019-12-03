import React, {Component,Fragment} from 'react';
import Task1 from './Components/Task1';
import Alert from "./Components/Alert";

class App extends Component {
state ={
  purchasing: true,
  alertPurchasing: true,
  btnDissmision: true,
};

alertClose = () => {
    this.setState({alertPurchasing: false})
};

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  };
  render() {
    return (
        <Fragment>
            <Task1 show={this.state.purchasing}
                   close={this.purchaseCancelHandler}
                   title='aa'
            >
                <p className="modalContent">This is modal content</p>
                <button onClick={this.purchaseCancelHandler} className="close">Close</button>
            </Task1>
           <Alert
               show={this.state.alertPurchasing}
               dismiss={this.alertClose}
               type="success"
               onclick={this.alertClose}
           >
               This is success type alert
               {/*<button onClick={this.alertClose} className="btn">X</button>*/}
           </Alert>

        </Fragment>


    );
  }
}

export default App;

