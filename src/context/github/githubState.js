import axios from "axios";
import { useReducer } from "react";
import { SEARCH_USERS } from "../types";
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
    // setShowLoading(true);
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    // setUsersData(response.data.items);
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
    // setShowLoading(false);
  };
  return (
    <GithubContext.Provider
      value={{
        usersData: state.usersData,
        title: state.title,
        user: state.user,
        showLoading: state.showLoading,
        searchUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
