/* eslint-disable import/no-anonymous-default-export */
import { CLEAR_USERS, GET_USER, SEARCH_USERS, SET_LOADING } from "../types";

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
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
