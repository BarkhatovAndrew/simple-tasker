import { CREATE_TASK, DELETE_TASK } from '../../helpers/ActionTypes';

const initialState = {
  tasks: [],
};

// eslint-disable-next-line default-param-last
function tasks(state = initialState, action) {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, {
          id: action.payload.id, title: 'New task', description: 'Type your text here...', boardId: action.payload.boardId,
        }],
      };
    case DELETE_TASK:
      return {
        ...state, tasks: state.tasks.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

export default tasks;
