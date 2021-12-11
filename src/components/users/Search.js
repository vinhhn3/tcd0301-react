import React, { useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");
  const { searchUsers, clearUsers, usersData } = props;
  const onChange = (event) => {
    setText(event.target.value);
  };

  const onClick = (event) => {
    event.preventDefault();
    if (text.trim() === "") {
      alert("Cannot be empty");
      return;
    }
    searchUsers(text);
    setText("");
  };

  const onClear = (event) => {
    event.preventDefault();
    clearUsers();
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          name="text"
          placeholder="Search by name ..."
          onChange={onChange}
          value={text}
        />
        <input
          type="submit"
          className="btn btn-dark btn-block"
          onClick={onClick}
        />
        {usersData.length > 0 ? (
          <button onClick={onClear} className="btn btn-light btn-block">
            Clear
          </button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Search;
