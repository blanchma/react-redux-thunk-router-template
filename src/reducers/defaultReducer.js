const initialState = {};

export const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_TYPE":
      return { ...state, default: action.payload };

    default:
      return state;
  }
};
