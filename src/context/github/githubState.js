import { useReducer } from "react";
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

  return (
    <GithubContext.Provider
      value={{
        usersData: state.usersData,
        title: state.title,
        user: state.user,
        showLoading: state.showLoading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
