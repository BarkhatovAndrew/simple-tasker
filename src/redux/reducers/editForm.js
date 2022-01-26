const initialState = {
  title: '',
  description: '',
};

// eslint-disable-next-line default-param-last
function editForm(state = initialState, action) {
  switch (action.type) {
    case 'HANDLE_TITLE':
      return {
        ...state, title: action.payload,
      };
    case 'HANDLE_DESCRIPTION':
      return {
        ...state, description: action.payload,
      };
    default:
      return state;
  }
}

export default editForm;
