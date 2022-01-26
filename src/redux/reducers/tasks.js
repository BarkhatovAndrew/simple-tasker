/* eslint-disable no-param-reassign */

const allTasks = JSON.parse(localStorage.getItem('tasks'));

const initialState = {
  tasks: allTasks,
};

// eslint-disable-next-line default-param-last
function tasks(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_TASK':
      return {
        ...state,
        tasks: [...state.tasks, {
          id: action.payload.id, title: 'New task', description: 'Type your text here...', boardId: action.payload.boardId,
        }],
      };
    case 'EDIT_TASK': {
      const copyTasks = [...state.tasks].map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.description = action.payload.description;
        }
        return item;
      });
      return {
        ...state, tasks: copyTasks,
      };
    }
    case 'DELETE_TASK':
      return {
        ...state, tasks: state.tasks.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

export default tasks;
