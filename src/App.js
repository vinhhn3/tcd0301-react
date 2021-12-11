import axios from "axios";
import { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    usersData: [],
    title: "TCD0301-React",
    searchText: "",
  };
  componentDidMount() {
    console.log("App.js is mounted ...");
    axios.get("https://api.github.com/users").then((response) => {
      console.log(response.data);
      this.setState({
        usersData: response.data,
      });
    });
  }

  searchUsers = (text) => {
    this.setState({
      searchText: text,
    });
  };

  render() {
    return (
      <div>
        <Navbar title={this.state.title} />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          {this.state.searchText}
          <Users usersData={this.state.usersData} />
        </div>
      </div>
    );
  }
}

export default App;
