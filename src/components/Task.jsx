import {
  Typography, Card, CardContent, Box,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import { SHOW_EDIT_TASK, SHOW_MODAL_TASK } from '../helpers/ActionTypes';

function Task({ title, description, id }) {
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch({ type: SHOW_MODAL_TASK, payload: id });
  };

  const showEditTask = () => {
    dispatch({ type: SHOW_EDIT_TASK, payload: id });
  };

  return (
    <>
      <Card
        sx={{
          margin: 2,
          minWidth: '275px',
          marginBottom: 0,
          cursor: 'pointer',
        }}>
        <CardContent
          sx={{ padding: 2, display: 'flex', flexDirection: 'column' }}>
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
