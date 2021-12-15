import React, { useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import UserItem from "./UserItem";

const Users = (props) => {
  const githubContext = useContext(GithubContext);
  const { usersData, showLoading } = githubContext;

  if (showLoading) {
    return (
      <div>
        <h1>Fetching data ...</h1>
      </div>
    );
  }

  return (
    <div style={userStyle}>
      {usersData.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
