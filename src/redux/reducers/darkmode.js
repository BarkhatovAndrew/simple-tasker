import { DARK_MODE_ON } from '../actionTypes/ActionTypes';

const dark = JSON.parse(localStorage.getItem('dark'));

const initialState = {
  dark,
};

// TODO: как менять body?

if (dark) {
  document.body.style.backgroundColor = '#1a1a1a';
} else {
  document.body.style.backgroundColor = 'white';
}

// eslint-disable-next-line default-param-last
function darkmode(state = initialState, action) {
  switch (action.type) {
    case DARK_MODE_ON:
      return {
        ...state, dark: !state.dark,
      };
    default:
      return state;
  }
}

export default darkmode;
