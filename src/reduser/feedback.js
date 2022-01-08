const initialState = {
  like: 0,
  dislike: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };
    case 'SET_FILTER':
      return {
        ...state,
        filterBy: action.payload,
      };
    default:
      return state;
  }
};