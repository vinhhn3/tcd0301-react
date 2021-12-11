import React from "react";
import UserItem from "./UserItem";

const Users = (props) => {
  if (props.showLoading) {
    return (
      <div>
        <h1>Fetching data ...</h1>
      </div>
    );
  }

  return (
    <div style={userStyle}>
      {props.usersData.map((user) => (
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
