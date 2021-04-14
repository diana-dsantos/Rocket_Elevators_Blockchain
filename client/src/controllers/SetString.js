import React from "react";

class SetString extends React.Component {
  state = { stackId: null };

  handleKeyDown (e, methodName) {
    // if the enter key is pressed, set the value with the string
    if (e.keyCode === 13) {
      this.setValue(e.target.value, methodName);
    }
  };

  setValue (value, methodName) {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.MyStringStore;

    // let drizzle know we want to call the `set` method with `value`
    const stackId = contract.methods[methodName].cacheSend(value, {
      from: drizzleState.accounts[0]
    });

    // save the `stackId` for later reference
    this.setState({ stackId });
  };

  getTxStatus = () => {
    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = this.props.drizzleState;

    // get the transaction hash using our saved `stackId`
    const txHash = transactionStack[this.state.stackId];

    // if transaction hash does not exist, don't display anything
    if (!txHash) return null;

    // otherwise, return the transaction status
    return `Transaction status: ${transactions[txHash] && transactions[txHash].status}`;
  };

  render() {
    return (
      <div className="container">
       <div className="card" >
       <div className="card-header">
         Input your project data
       </div>
       <ul className="list-group list-group-flush">
         <li className="list-group-item">
            <div className="row">
              <div className="col-6">Batteries: </div>{" "}
              <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setBatteries')} />
            </div>
         </li>
         <li className="list-group-item">
            <div className="row">
              <div className="col-6">Columns: </div>{" "}
				      <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setColumns')} />
            </div>
         </li>
         <li className="list-group-item">
            <div className="row">
              <div className="col-6">Elevators: </div>{" "}
				      <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setElevators')} />
            </div>
         </li>
         <li className="list-group-item">
            <div className="row">
              <div className="col-6">Floors: </div>{" "}
				      <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setFloors')} />
            </div>
         </li>
       </ul>
       <button className="btn btn-primary" type="submit">Submit</button>
       </div>
     </div>
    );
  }
}

export default SetString;