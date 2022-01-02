import axios from "axios";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      skyWalker: {},
    };
  }

  componentDidMount = () => {
    axios
      .get(`https://swapi.dev/api/people/1`)
      .then((response) => {
        this.setState({
          skyWalker: response.data,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <h2>Name: {this.state.skyWalker.name}</h2>
        <h2>Birth Year: {this.state.skyWalker.birth_year}</h2>
        <h2>Height: {this.state.skyWalker.height}</h2>
        <h2>Eye Color: {this.state.skyWalker.eye_color}</h2>
      </div>
    );
  }
}

export default App;
