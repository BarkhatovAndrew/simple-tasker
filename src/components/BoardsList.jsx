import { Typography, Box } from '@mui/material';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { INIT_GROUPS } from '../helpers/ActionTypes';
import Board from './Board.jsx';

function BoardsList() {
  // const dispatch = useDispatch();

  const boards = useSelector((state) => state.boards.boards);

  // useEffect(() => {
  //   const boardList = JSON.parse(localStorage.getItem('boards'));
  //   dispatch({ type: INIT_GROUPS, payload: boardList });
  // }, [dispatch]);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h4'>
          Your boards
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {boards.map((item) => <Board title={item.title} id={item.id} key={item.id} />)}
      </Box>
    </>
  );
}

export default BoardsList;
