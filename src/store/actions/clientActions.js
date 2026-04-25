import { clientActionTypes } from "../reducers/clientReducer";

export const setUser = (user) => {
  return {
    type: clientActionTypes.SET_USER,
    payload: user,
  };
};

export const setRoles = (roles) => {
  return {
    type: clientActionTypes.SET_ROLES,
    payload: roles,
  };
};

export const setTheme = (theme) => {
  return {
    type: clientActionTypes.SET_THEME,
    payload: theme,
  };
};

export const setLanguage = (language) => {
  return {
    type: clientActionTypes.SET_LANGUAGE,
    payload: language,
  };
};