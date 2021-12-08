import React, { Component } from "react";

class Name extends Component {
  render() {
    return (
      <div>
        <h1>My Name is: {this.props.name}</h1>
        <p>This is a short description</p>
      </div>
    );
  }
}

export default Name;
