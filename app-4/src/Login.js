import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    this.setState({
      username: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={(event) =>
              this.setState({ username: event.target.value })
            }
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
