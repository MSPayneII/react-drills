import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
    };
  }

  onChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    return (
      <main className="App">
        <form action="">
          <input
            type="text"
            onChange={this.onChange}
            value={this.state.userInput}
            placeholder="Enter text here"
          />
        </form>
        <div>
          <p>{this.state.userInput}</p>
        </div>
      </main>
    );
  }
}

export default App;
