import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: [
        "Tacos",
        "Chicken",
        "Pizza",
        "Steak",
        "Ice Cream",
        "Fries",
        "Burgers",
        "Taco Salad",
      ],
      userInput: "",
    };
  }

  onChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  handleFoodFilter = (arr) => {
    let userFoods = arr
      .filter((item, index) => {
        return item.includes(this.state.userInput);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return userFoods;
  };

  render() {
    return (
      <main className="App">
        <div>
          <form>
            <input
              type="text"
              onChange={this.onChange}
              value={this.state.userInput}
            />
          </form>
          <ul>{this.handleFoodFilter(this.state.foods)}</ul>
        </div>
      </main>
    );
  }
}

export default App;
