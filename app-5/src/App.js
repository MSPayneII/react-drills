import React, { Component } from "react";
import "./App.css";
import Image from "./Image";

class App extends Component {
  constructor() {
    super();

    this.state = {
      src: "https://http.cat/100.jpg",
      alt: "cat",
    };
  }

  render() {
    return (
      <div className="App">
        <Image src={this.state.src} alt={this.state.alt} />
      </div>
    );
  }
}

export default App;
