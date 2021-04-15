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
        <table className="table">
          <thead>
          
            <tr>
              <th scope="col">Controllers</th>
              <th scope="col">Shafts</th>
              <th scope="col">Doors</th>
              <th scope="col">Buttons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{aluminumBars && aluminumBars.value}</td>
              <td>{aluminumSheets && aluminumSheets.value}</td>
              <td>{aluminumBars && aluminumBars.value}</td>
              <td>{aluminumSheets && aluminumSheets.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
		);
  }
}

export default ManufacturingShow;