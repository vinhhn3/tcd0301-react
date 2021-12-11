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
    showLoading: false,
  };

  searchUsers = async (text) => {
    this.setState({ showLoading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({
      usersData: response.data.items,
      showLoading: false,
    });
  };

  clearUsers = () => {
    this.setState({
      usersData: [],
    });
  };

  render() {
    return (
      <div>
        <Navbar title={this.state.title} />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            usersData={this.state.usersData}
          />
          <Users
            showLoading={this.state.showLoading}
            usersData={this.state.usersData}
          />
        </div>
      </div>
    );
  }
}

export default App;
