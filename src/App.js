import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Search from "./components/users/Search";
import User from "./components/users/User";
import Users from "./components/users/Users";
import GithubState from "./context/github/githubState";

const App = () => {
  const [usersData, setUsersData] = useState([]);
  const [title, setTitle] = useState("TCD0301-React");
  const [showLoading, setShowLoading] = useState(false);
  const [user, setUser] = useState({});

  const searchUsers = async (text) => {
    setShowLoading(true);
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    setUsersData(response.data.items);
    setShowLoading(false);
  };

  const clearUsers = () => {
    setUsersData([]);
  };

  const getUser = async (login) => {
    const response = await axios.get(`https://api.github.com/users/${login}`);
    setUser(response.data);
  };

  return (
    <GithubState>
      <Router>
        <div>
          <Navbar title={title} />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <Search
                      searchUsers={searchUsers}
                      clearUsers={clearUsers}
                      usersData={usersData}
                    />
                    <Users showLoading={showLoading} usersData={usersData} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User {...props} user={user} getUser={getUser} />
                )}
              />
              <Route path="" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
