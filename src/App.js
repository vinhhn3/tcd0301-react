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
  return (
    <GithubState>
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => <User {...props} />}
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
