import React, { Component } from "react";
import Todo from "./Todo";

class List extends Component {
  render() {
    return (
      <div>
        {this.props.tasks.map((item, index) => {
          return <Todo key={index} task={item} />;
        })}
      </div>
    );
  }
}

export default List;
