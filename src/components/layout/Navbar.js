import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const Navbar = () => {
  const githubContext = useContext(GithubContext);
  const { title } = githubContext;
  return (
    <div className="navbar bg-primary">
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
