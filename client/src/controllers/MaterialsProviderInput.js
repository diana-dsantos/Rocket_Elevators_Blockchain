import React from "react";

class MaterialsProviderInput extends React.Component {
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

  render() {
    // if it exists, then we display its value
    return (
      <div className="container">
        <div className="card" >
        <div className="card-header">
          Input your material provider.
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row">
              <div className="col-6">Controllers: </div>{" "}
              <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setControllers')} />
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-6">Shafts: </div>{" "}
              <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setShafts')} />
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-6">Doors: </div>{" "}
              <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setDoors')} />
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-6">Buttons: </div>{" "}
              <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setButtons')} />
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-6">Display: </div>{" "}
              <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setDisplay')} />
            </div>
          </li>
        </ul>
        <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </div>
		);
  }
}

export default MaterialsProviderInput;