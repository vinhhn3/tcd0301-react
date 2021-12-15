/* eslint-disable import/no-anonymous-default-export */
import { CLEAR_USERS, SEARCH_USERS, SET_LOADING } from "../types";

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
    case CLEAR_USERS:
      return {
        ...state,
        usersData: [],
      };
    default:
      return state;
  }
};
