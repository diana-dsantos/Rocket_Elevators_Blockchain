import React from "react";

class QualitySHInput extends React.Component {
  state = { dataKeydoorTest: null,dataKeycableTest: null, dataKeybraketest: null, dataKeybatteryoperating: null, dataKeycertificateofconformity: null};

  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.MyStringStore;

    console.log(drizzle);
    console.log(drizzleState);

    // let drizzle know we want to watch the `myString` method
    // setDoorTest doorTest 
    //setCableTest  cableTest
    //setBraketest  braketest 
    //setBatteryoperating batteryoperating 
    //setcertificateofconformity certificateofconformity

    const dataKeydoorTest = contract.methods["doorTest"].cacheCall();
    const dataKeycableTest = contract.methods["cableTest"].cacheCall();
    const dataKeybraketest = contract.methods["braketest"].cacheCall();
    const dataKeybatteryoperating = contract.methods["batteryoperating"].cacheCall();
    const dataKeycertificateofconformity = contract.methods["certificateofconformity"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKeydoorTest, dataKeycableTest, dataKeybraketest,dataKeybatteryoperating, dataKeycertificateofconformity});
  }

  render() {
    // get the contract state from drizzleState
    const { MyStringStore } = this.props.drizzleState.contracts;
 
    // using the saved `dataKey`, get the variable we're interested in

    const doorTest = MyStringStore.doorTest[this.state.dataKeydoorTest];
    const cableTest = MyStringStore.cableTest[this.state.dataKeycableTest];
    const braketest = MyStringStore.braketest[this.state.dataKeybraketest];
    const batteryoperating = MyStringStore.batteryoperating[this.state.dataKeybatteryoperating];
    const certificateofconformity = MyStringStore.certificateofconformity[this.state.dataKeycertificateofconformity];    

    // if it exists, then we display its value
    return (
      <div className="container">
      <div className="card" >
      <div className="card-header">
      Quality, Security and Homologation.
      </div>
        <table className="table">
          <thead>          
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Check</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Door Test has passed:</td>
              <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></td>
            </tr>
            <tr>
              <td>Cable Test has passed:</td>
              <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></td>
            </tr>
            <tr>
              <td>Brake test is passed:</td>
              <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></td>
            </tr>            
            <tr>
              <td> Battery operating permit:</td>
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


export default QualitySHInput;


 
// aluminumbBars
// cableTest
// braketest
// batteryoperating
// certificateofconformity
// rubberBumpers
// lightinLed
// displayPanel
// manufacturingButtons