import axios from "axios";
import { useReducer } from "react";
import { CLEAR_USERS, GET_USER, SEARCH_USERS, SET_LOADING } from "../types";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

const GithubState = (props) => {
  const initialState = {
    usersData: [],
    title: "TCD0301-React-Context",
    showLoading: false,
    user: {},
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search users
  const searchUsers = async (text) => {
    setShowLoading();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  // Set showLoading to true
  const setShowLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  // Clear Users
  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  // Get a User
  const getUser = async (login) => {
    const response = await axios.get(`https://api.github.com/users/${login}`);
    dispatch({
      type: GET_USER,
      payload: response.data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        usersData: state.usersData,
        title: state.title,
        user: state.user,
        showLoading: state.showLoading,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
