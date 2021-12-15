/* eslint-disable import/no-anonymous-default-export */
import { SEARCH_USERS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        usersData: action.payload,
      };

    default:
      return state;
  }
};
