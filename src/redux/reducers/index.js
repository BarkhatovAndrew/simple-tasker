import { combineReducers } from 'redux';
import boards from './boards';
import tasks from './tasks';
import modal from './modal';
import darkmode from './darkmode';

export default combineReducers({
  boards,
  tasks,
  modal,
  darkmode,
});
