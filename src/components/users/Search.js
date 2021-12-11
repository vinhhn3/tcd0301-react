import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  onChange = (event) => {
    this.setState({ text: event.target.value });
  };

  onClick = (event) => {
    event.preventDefault();
    if (this.state.text.trim() === "") {
      alert("Cannot be empty");
    }
    this.props.searchUsers(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <form className="form">
          <input
            type="text"
            name="text"
            placeholder="Search by name ..."
            onChange={this.onChange}
            value={this.state.text}
          />
          <input
            type="submit"
            className="btn btn-dark btn-block"
            onClick={this.onClick}
          />
        </form>
      </div>
    );
  }
}

export default Search;
