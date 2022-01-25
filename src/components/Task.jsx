import {
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { SHOW_MODAL } from '../helpers/ActionTypes';

function Task({ title, description, id }) {
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch({ type: SHOW_MODAL, payload: id });
  };

  return (
    <>
      <Card sx={{ margin: 2, minWidth: '275px', marginBottom: 0 }}>
        <CardContent
          sx={{ padding: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant='body1'>{description}</Typography>
          <DeleteIcon
            sx={{
              marginTop: 2,
              marginRight: 1,
              cursor: 'pointer',
              alignSelf: 'flex-end',
            }}
            onClick={showModal}
          />
        </CardContent>
      </Card>
    </>
  );
}

export default Task;
