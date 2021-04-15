import React from "react";

class ManufacturingInput extends React.Component {
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
          Input your Manufacturing.
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="row">
              <div className="col-6">Aluminum Bars: </div>{" "}
              <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setAluminumBars')} />
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-6">Aluminum Sheets: </div>{" "}
              <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setAluminumSheets')} />
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-6">Stainless Steel Sheets: </div>{" "}
              <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setStainlessSteelSheets')} />
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-6">Springs: </div>{" "}
              <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setSprings')} />
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-6">Rubber Bands: </div>{" "}
              <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setRubberBands')} />
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-6">Rubber Bumpers: </div>{" "}
              <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setRubberBumpers')} />
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-6">Lightin Led: </div>{" "}
              <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setLightinLed')} />
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-6">Display Panel: </div>{" "}
              <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setDisplayPanel')} />
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col-6">Buttons: </div>{" "}
              <input type="text" onKeyDown={(e) => this.handleKeyDown(e, 'setManufacturingButtons')} />
            </div>
          </li>
        </ul>
        <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </div>
		);
  }
}


export default ManufacturingInput;


 
// aluminumbBars
// aluminumSheets
// stainlessSteelSheets
// springs
// rubberBands
// rubberBumpers
// lightinLed
// displayPanel
// manufacturingButtons