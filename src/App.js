import axios from "axios";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
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
      <Router>
        <div>
          <Navbar title={this.state.title} />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      usersData={this.state.usersData}
                    />
                    <Users
                      showLoading={this.state.showLoading}
                      usersData={this.state.usersData}
                    />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route path="" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
