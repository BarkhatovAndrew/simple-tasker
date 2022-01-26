import {
  Typography, Card, CardContent, Box,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import {
  HANDLE_DESCRIPTION, HANDLE_TITLE, SHOW_EDIT_TASK, SHOW_MODAL_TASK,
} from '../helpers/ActionTypes';

function Task({ title, description, id }) {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.tasks);

  const showModal = () => {
    dispatch({ type: SHOW_MODAL_TASK, payload: id });
  };

  const showEditTask = () => {
    const editTask = tasks.find((item) => item.id === id);
    dispatch({ type: HANDLE_TITLE, payload: editTask.title });
    dispatch({ type: HANDLE_DESCRIPTION, payload: editTask.description });
    dispatch({ type: SHOW_EDIT_TASK, payload: id });
  };

  return (
    <>
      <Card
        sx={{
          margin: 2,
          width: '275px',
          marginBottom: 0,
        }}>
        <CardContent
          sx={{
            padding: 2,
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            wordBreak: 'break-all',
          }}>
          <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant='body1'>{description}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Edit
              sx={{
                marginTop: 2,
                marginRight: 1,
                cursor: 'pointer',
                alignSelf: 'flex-end',
              }}
              onClick={showEditTask}
            />
            <DeleteIcon
              sx={{
                marginTop: 2,
                marginRight: 1,
                cursor: 'pointer',
                alignSelf: 'flex-end',
              }}
              onClick={showModal}
            />
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default Task;
