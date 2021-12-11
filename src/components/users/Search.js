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
      return;
    }
    this.props.searchUsers(this.state.text);
    this.setState({
      text: "",
    });
  };

  onClear = (event) => {
    event.preventDefault();
    this.props.clearUsers();
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
          {this.props.usersData.length > 0 ? (
            <button onClick={this.onClear} className="btn btn-light btn-block">
              Clear
            </button>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}

export default Search;
