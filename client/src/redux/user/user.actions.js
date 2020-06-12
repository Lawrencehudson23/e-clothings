import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER, //NOTE: NEVER CHANGE
  payload: user,
});
