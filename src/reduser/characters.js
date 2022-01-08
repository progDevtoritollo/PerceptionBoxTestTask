const initialState = {
  characters: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  console.log(state, action);
  const { type, payload } = action;
  switch (type) {
    case "CHARACTERS:SET_ITEMS":
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
};
