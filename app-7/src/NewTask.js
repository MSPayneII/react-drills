import React, { Component } from "react";

class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
    };
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  handleAdd = (event) => {
    event.preventDefault();
    this.props.add(this.state.userInput);
    this.setState({ userInput: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAdd}>
          <input
            type="text"
            value={this.state.userInput}
            placeholder="Enter new task"
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default NewTask;
