import React from "react";

class ManufacturingShow extends React.Component {
  state = { dataKeyAluminumBars: null,dataKeyAluminumSheets: null, dataKeyStainlessSteelSheets: null, dataKeySprings: null, dataKeyRubberBands: null, dataKeyLightinLed: null, dataKeydisplayPanel: null, dataKeyManufacturingButtons: null};

  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.MyStringStore;

    console.log(drizzle);
    console.log(drizzleState);

    // let drizzle know we want to watch the `myString` method
    const dataKeyAluminumBars = contract.methods["aluminumBars"].cacheCall();
    const dataKeyAluminumSheets = contract.methods["aluminumSheets"].cacheCall();
    const dataKeyStainlessSteelSheets = contract.methods["stainlessSteelSheets"].cacheCall();
    const dataKeySprings = contract.methods["springs"].cacheCall();
    const dataKeyRubberBands = contract.methods["rubberBands"].cacheCall();
    const dataKeyLightinLed = contract.methods["lightinLed"].cacheCall();
    const dataKeyDisplayPanel = contract.methods["displayPanel"].cacheCall();
    const dataKeyManufacturingButtons = contract.methods["manufacturingButtons"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKeyAluminumBars, dataKeyAluminumSheets, dataKeyStainlessSteelSheets,dataKeySprings, dataKeyRubberBands, dataKeyLightinLed, dataKeyDisplayPanel, dataKeyManufacturingButtons});
  }

  render() {
    // get the contract state from drizzleState
    const { MyStringStore } = this.props.drizzleState.contracts;
 
    // using the saved `dataKey`, get the variable we're interested in

    const aluminumBars = MyStringStore.aluminumBars[this.state.dataKeyAluminumBars];
    const aluminumSheets = MyStringStore.aluminumSheets[this.state.dataKeyAluminumSheets];
    const stainlessSteelSheets = MyStringStore.stainlessSteelSheets[this.state.dataKeyStainlessSteelSheets];
    const springs = MyStringStore.springs[this.state.dataKeySprings];
    const rubberBands = MyStringStore.rubberBands[this.state.dataKeyRubberBands];    
    const lightinLed = MyStringStore.lightinLed[this.state.dataKeyLightinLed];
    const displayPanel = MyStringStore.displayPanel[this.state.dataKeyDisplayPanel];   
    const manufacturingButtons = MyStringStore.manufacturingButtons[this.state.dataKeyManufacturingButtons];
    
    // if it exists, then we display its value
    return (
      <div className="container">
      <div className="card" >
      <div className="card-header">
        Input your Manufacturing.
      </div>
        <table className="table">
          <thead>          
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Check</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aluminum Bars:</td>
              <td>{aluminumBars && aluminumBars.value}</td>
              <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></td>
            </tr>
            <tr>
              <td>Aluminum Sheets:</td>
              <td>{aluminumSheets && aluminumSheets.value}</td>
              <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></td>
            </tr>
            <tr>
              <td>Stainless Steel Sheets:</td>
              <td>{stainlessSteelSheets && stainlessSteelSheets.value}</td>
              <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></td>
            </tr>            
            <tr>
              <td>Springs:</td>
              <td>{springs && springs.value}</td>
              <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></td>
            </tr>
            <tr>
              <td>Rubber Bands:</td>
              <td>{rubberBands && rubberBands.value}</td>
              <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></td>
            </tr>
            <tr>
              <td>Rubber Bumpers:</td>
              <td>{aluminumSheets && aluminumSheets.value}</td>
              <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></td>
            </tr>
            <tr>
              <td>Lightin Led:</td>
              <td>{lightinLed && lightinLed.value}</td>
              <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></td>
            </tr>
            <tr>
              <td>Springs:</td>
              <td>{aluminumSheets && aluminumSheets.value}</td>
              <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></td>
            </tr>
            <tr>
              <td>Buttons:</td>
              <td>{aluminumSheets && aluminumSheets.value}</td>
              <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></td>
            </tr>
            <tr>
              <td>Display Panel:</td>
              <td>{displayPanel && displayPanel.value}</td>
              <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary" type="submit">Submit</button>
      </div>
      </div>
		);
  }
}

export default ManufacturingShow;