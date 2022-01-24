import { combineReducers } from 'redux';
import boards from './boards';
import tasks from './tasks';

export default combineReducers({
  boards,
  tasks,
});
