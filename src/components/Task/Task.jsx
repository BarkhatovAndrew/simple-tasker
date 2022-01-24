import { Typography, Card, CardContent } from '@mui/material';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { DELETE_TASK } from '../../helpers/ActionTypes';

function Task({ title, description, id }) {
  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch({ type: DELETE_TASK, payload: id });
  };

  return (
    <>
      <Card sx={{ margin: 2 }}>
        <CardContent sx={{ padding: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant='body1'>
            {description}
          </Typography>
          <DeleteIcon sx={{
            marginTop: 2, marginRight: 1, cursor: 'pointer', alignSelf: 'flex-end',
          }} onClick={deleteTask} />
        </CardContent>
      </Card>
    </>
  );
}

export default Task;
