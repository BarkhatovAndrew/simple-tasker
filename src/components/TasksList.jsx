import { useSelector } from 'react-redux';
import {
  Typography,
} from '@mui/material';
import Task from './Task.jsx';

function TasksList({ boardId }) {
  const tasks = useSelector((state) => state.tasks.tasks)
    .filter((item) => item.boardId === boardId);

  return (
    <>
      {tasks.length > 0
        ? <Typography variant='h6'>Tasks:</Typography>
        : <Typography variant='h6'>Create your first task</Typography>}
      {tasks.map((item) => (
        <Task
          id={item.id}
          boardId={item.boardId}
          title={item.title}
          description={item.description}
          key={item.id}
        />
      ))}
    </>
  );
}

export default TasksList;
