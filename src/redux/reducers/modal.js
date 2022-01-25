import { SHOW_MODAL } from '../../helpers/ActionTypes';

const initialState = {
  show: false,
  id: null,
};

// eslint-disable-next-line default-param-last
function modal(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state, show: !state.show, id: action.payload,
      };
    default:
      return state;
  }
}

export default modal;
