import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      userInput: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.userInput],
      userInput: "",
    });
  };
  render() {
    return (
      <div className="App">
        <header>
          <h1>My to-do list: </h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter new task"
            value={this.state.userInput}
            onChange={(event) =>
              this.setState({ userInput: event.target.value })
            }
          />
          <button type="submit">Add</button>
        </form>

        {this.state.tasks.map((task, index) => {
          return <Todo task={task} key={index} />;
        })}
      </div>
    );
  }
}

export default App;
