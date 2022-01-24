import { CREATE_TASK } from '../../helpers/ActionTypes';

const initialState = {
  tasks: [],
};

// eslint-disable-next-line default-param-last
function tasks(state = initialState, action) {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state, tasks: [...state.tasks, { title: 'New task', description: '' }],
      };
    default:
      return state;
  }
}

export default tasks;
