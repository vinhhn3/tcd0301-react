import React from "react";

const Navbar = (props) => {
  const { title } = props;
  return (
    <div className="navbar bg-primary">
      <h1>{title}</h1>
    </div>
  );
};

export default Navbar;
