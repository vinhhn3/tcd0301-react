import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  const { avatar_url, login, html_url } = user;
  return (
    <div className="card text-center">
      <img
        alt=""
        src={avatar_url}
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      {/* <a href={html_url} className="btn btn-primary btn-sm">
        More
      </a> */}
      <Link to={`/user/${login}`} className="btn btn-primary btn-sm">
        More
      </Link>
    </div>
  );
};

export default UserItem;
