import {
  Container, Typography, Modal, Box, Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header.jsx';
import AddBoard from './AddBoard.jsx';
import Footer from './Footer.jsx';
import BoardsList from './BoardsList.jsx';
import { DELETE_TASK, SHOW_MODAL } from '../helpers/ActionTypes';

function App() {
  const dispatch = useDispatch();

  const boards = useSelector((state) => state.boards.boards);
  const show = useSelector((state) => state.modal.show);
  const id = useSelector((state) => state.modal.id);

  const deleteTask = () => {
    dispatch({ type: DELETE_TASK, payload: id });
    dispatch({ type: SHOW_MODAL });
  };

  const showModal = () => {
    dispatch({ type: SHOW_MODAL });
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Container>
      <Header />
      <AddBoard />
      {boards.length > 0 ? (
        <BoardsList />
      ) : (
        <Typography variant='h4' sx={{ textAlign: 'center' }}>
          There no boards yet
        </Typography>
      )}
      <Footer />
      <Modal
        open={show}
        onClose={showModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Do you want to delete task?
          </Typography>
          <Button
            variant='contained'
            color='error'
            type='submit'
            sx={{ margin: 1 }}
            onClick={deleteTask}>
            Yes
          </Button>
          <Button variant='outlined' sx={{ margin: 1 }} onClick={showModal}>
            No
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}

export default App;
