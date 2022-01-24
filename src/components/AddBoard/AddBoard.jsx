import { Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { CREATE_BOARD } from '../../helpers/ActionTypes';

function AddBoard() {
  const dispatch = useDispatch();

  const createBoard = () => {
    dispatch({ type: CREATE_BOARD, payload: uniqid() });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: 5 }}>
      <Button variant='contained' onClick={createBoard}>Add Board</Button>
    </Box>
  );
}

export default AddBoard;
