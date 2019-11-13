const initialState = {
  primaryColor: '#4F6D7A',
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        primaryColor: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
