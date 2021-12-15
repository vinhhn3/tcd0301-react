/* eslint-disable import/no-anonymous-default-export */
import { SEARCH_USERS, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        usersData: action.payload,
        showLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        showLoading: true,
      };
    default:
      return state;
  }
};
