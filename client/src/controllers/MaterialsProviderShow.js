import React from "react";

class MaterialsProviderShow extends React.Component {
  state = { dataKeyControllers: null,dataKeyShafts: null, dataKeyDoors: null, dataKeyButtons: null, dataKeyDisplay: null};

  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.MyStringStore;

    console.log(drizzle);
    console.log(drizzleState);

    // let drizzle know we want to watch the `myString` method
    const dataKeyControllers = contract.methods["controllers"].cacheCall();
    const dataKeyShafts = contract.methods["shafts"].cacheCall();
    const dataKeyDoors = contract.methods["doors"].cacheCall();
    const dataKeyButtons = contract.methods["buttons"].cacheCall();
    const dataKeyDisplay = contract.methods["display"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKeyControllers, dataKeyShafts, dataKeyDoors, dataKeyButtons, dataKeyDisplay});
  }

  render() {
    // get the contract state from drizzleState
    const { MyStringStore } = this.props.drizzleState.contracts;
 
    // using the saved `dataKey`, get the variable we're interested in
    const controllers = MyStringStore.controllers[this.state.dataKeyControllers];
    const shafts = MyStringStore.shafts[this.state.dataKeyShafts];
    const doors = MyStringStore.doors[this.state.dataKeyDoors];
    const buttons = MyStringStore.buttons[this.state.dataKeyButtons];
    const display = MyStringStore.display[this.state.dataKeyDisplay];

    // if it exists, then we display its value
    return (
      <div className="container">
        <table className="table">
          <thead>
          
            <tr>
              <th scope="col">Material</th>
              <th scope="col">Quantity</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{controllers && controllers.value}</td>
              <td>{shafts && shafts.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
		);
  }
}

export default MaterialsProviderShow;