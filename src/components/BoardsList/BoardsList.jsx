import { Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import Board from '../Board/Board.jsx';

function BoardsList() {
  const boards = useSelector((state) => state.boards.boards);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h4'>
          Your boards:
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {boards.map((item) => <Board title={item.title} id={item.id} />)}
      </Box>
    </>
  );
}

export default BoardsList;
