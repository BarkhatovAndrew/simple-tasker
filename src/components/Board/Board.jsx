import { Box, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { DELETE_BOARD } from '../../helpers/ActionTypes';

function Board({ title, id }) {
  const dispatch = useDispatch();

  const deleteBoard = () => {
    dispatch({ type: DELETE_BOARD, payload: id });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '30%',
      }}>
      <Typography variant='h5' sx={{ margin: 2 }}>
        {title}
      </Typography>
      <Typography variant='body2' sx={{ color: 'gray' }}>
        {id}
      </Typography>
      <Button variant='contained' sx={{ margin: 1 }}>
        Add task
      </Button>
      <Button
        variant='contained'
        color='error'
        sx={{ margin: 1 }}
        onClick={deleteBoard}>
        Delete board
      </Button>
    </Box>
  );
}

export default Board;
