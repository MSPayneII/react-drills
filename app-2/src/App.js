import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      strArray: ["Pizza", "Tacos", "Chicken", "Steak", "Chili", "Cake", "Pie"],
    };
  }
  render() {
    return (
      <main>
        <ul className="App">
          {this.state.strArray.map((food, index) => {
            return <h2 key={index}>{food}</h2>;
          })}
        </ul>
      </main>
    );
  }
}

export default App;
