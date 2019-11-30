const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BLOG':
      return action.data;
    default:
      return state;
  }
};
