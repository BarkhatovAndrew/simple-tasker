const initialState = {
  dark: false,
};

// eslint-disable-next-line default-param-last
function darkmode(state = initialState, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return {
        ...state, dark: !state.dark,
      };
    default:
      return state;
  }
}

export default darkmode;
