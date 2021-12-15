import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Search from "../users/Search";
import User from "../users/User";
import Users from "../users/Users";
import About from "./About";
import NotFound from "./NotFound";

const Home = () => {
  return (
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
  );
};

export default Home;
