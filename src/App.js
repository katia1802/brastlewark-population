import React, { Component } from "react";
import { createPromise } from "./services/gnomeService";
import GnomesList from './components/GnomesList'
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gnomesRawData: []
    };
  }

  componentDidMount() {
    createPromise().then(data => {
      this.setState({
        gnomesRawData: data.Brastlewark
      });
    });
  }

  render() {
    console.log ('holi', this.state.gnomesRawData)
    return (
      <div className="App">
        <GnomesList 
        gnomesRawData={this.state.gnomesRawData} />
      </div>
    );
  }
}

export default App;
