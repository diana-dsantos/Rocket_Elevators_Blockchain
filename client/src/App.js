import React, { Component } from "react";
import ProjectOffice from "./controllers/ProjectOffice";
import SetString from "./controllers/SetString";
import MaterialsProvider from "./controllers/MaterialsProvider";
import Manufacturing from "./controllers/Manufacturing";
import "./App.css";



class App extends Component {
  state = { loading: true, drizzleState: null };

  componentDidMount() {
    const { drizzle } = this.props;

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {

      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });

		// adding scripts
		const script1 = document.createElement("script");
		const script2 = document.createElement("script");
		const script3 = document.createElement("script");		
		const link = document.createElement("link");

		link.rel="stylesheet"
		link.href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"

		script1.src = "https://code.jquery.com/jquery-3.3.1.slim.min.js";
		script1.async = true;

		script2.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js";
		script2.async = true;

		script3.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js";
		script3.type = "application/json"

		document.head.appendChild(link);
		document.head.appendChild(script1);
		document.head.appendChild(script2);
		document.head.appendChild(script3);		
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (this.state.loading) return "Loading Drizzle...";
    return (			
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark lg">
        <h1 className ="display-3">ROCKET ELEVATORS</h1>
      </nav>
      <div className="App">
        <SetString
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <ProjectOffice
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        /> 
        <MaterialsProvider
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />     
       <Manufacturing
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />         
      </div>
    </div> 
    );
  }
}

export default App;