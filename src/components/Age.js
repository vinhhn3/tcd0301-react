import React, { Component } from "react";

export default class Age extends Component {
  render() {
    return (
      <div>
        <h3>My age is: {this.props.age}</h3>
        <h4>I feel old ...</h4>
      </div>
    );
  }
}
