import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  componentDidMount() {
    console.log("Users component is mounted ...");
  }

  render() {
    return (
      <div style={userStyle}>
        {this.props.usersData.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "1rem",
};

export default Users;
