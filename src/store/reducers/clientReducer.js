const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "light",
  language: "tr",
};

export const clientActionTypes = {
  SET_USER: "SET_USER",
  SET_ROLES: "SET_ROLES",
  SET_THEME: "SET_THEME",
  SET_LANGUAGE: "SET_LANGUAGE",
};

export default function clientReducer(state = initialState, action) {
  switch (action.type) {
    case clientActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case clientActionTypes.SET_ROLES:
      return {
        ...state,
        roles: action.payload,
      };

    case clientActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    case clientActionTypes.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
}