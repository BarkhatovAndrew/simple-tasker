import {
  Container,
  Typography,
  Modal,
  Box,
  Button,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Header from './Header.jsx';
import AddBoard from './AddBoard.jsx';
import Footer from './Footer.jsx';
import BoardsList from './BoardsList.jsx';
import {
  DELETE_BOARD,
  DELETE_TASK,
  EDIT_TASK,
  SHOW_EDIT_TASK,
  SHOW_MODAL_BOARD,
  SHOW_MODAL_TASK,
} from '../helpers/ActionTypes';

function App() {
  const dispatch = useDispatch();

  const boards = useSelector((state) => state.boards.boards);
  const showModalTask = useSelector((state) => state.modal.show);
  const showModalBoard = useSelector((state) => state.modal.showBoard);
  const id = useSelector((state) => state.modal.id);
  const boardId = useSelector((state) => state.modal.boardId);
  const showModalEdit = useSelector((state) => state.modal.showEditTask);
  const taskId = useSelector((state) => state.modal.taskId);
  const tasks = useSelector((state) => state.tasks.tasks);
  const darkmode = useSelector((state) => state.darkmode.dark);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const deleteTask = () => {
    dispatch({ type: DELETE_TASK, payload: id });
    dispatch({ type: SHOW_MODAL_TASK });
  };

  const deleteBoard = () => {
    dispatch({ type: DELETE_BOARD, payload: boardId });
    dispatch({ type: SHOW_MODAL_BOARD });
  };

  const showModalTaskFunc = () => {
    dispatch({ type: SHOW_MODAL_TASK });
  };

  const showModalBoardFunc = () => {
    dispatch({ type: SHOW_MODAL_BOARD });
  };

  const showModalEditFunc = () => {
    const taskToEdit = tasks.find((item) => item.id === taskId);
    setTitle(taskToEdit.title);
    dispatch({ type: SHOW_EDIT_TASK });
  };

  const editInput = (e) => {
    setTitle(e.target.value);
  };

  const editDesc = (e) => {
    setDescription(e.target.value);
  };

  const saveChanges = () => {
    dispatch({ type: EDIT_TASK, payload: { id: taskId, title, description } });
    dispatch({ type: SHOW_EDIT_TASK });
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
    <Container
      maxWidth
      sx={
        darkmode
          ? {
            backgroundColor: '#1a1a1a', height: '100vh', padding: 5, color: 'white', transition: '1s',
          }
          : {
            backgroundColor: 'white', height: '100vh', padding: 5, transition: '1s',
          }
      }>
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
        open={showModalTask}
        onClose={showModalTaskFunc}
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
          <Button
            variant='outlined'
            sx={{ margin: 1 }}
            onClick={showModalTaskFunc}>
            No
          </Button>
        </Box>
      </Modal>

      <Modal
        open={showModalBoard}
        onClose={showModalBoardFunc}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Do you want to delete board?
          </Typography>
          <Button
            variant='contained'
            color='error'
            type='submit'
            sx={{ margin: 1 }}
            onClick={deleteBoard}>
            Yes
          </Button>
          <Button
            variant='outlined'
            sx={{ margin: 1 }}
            onClick={showModalBoardFunc}>
            No
          </Button>
        </Box>
      </Modal>

      <Modal
        open={showModalEdit}
        onClose={showModalEditFunc}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Edit your task
          </Typography>
          <Typography variant='h7'>
            <OutlinedInput
              sx={{ width: '100%', marginBottom: 1 }}
              value={title}
              onChange={editInput}
            />
            <TextField
              multiline
              rows={5}
              sx={{ width: '100%' }}
              value={description}
              onChange={editDesc}
            />
          </Typography>
          <Button
            variant='contained'
            type='submit'
            sx={{ marginTop: 1, width: '100%' }}
            onClick={saveChanges}>
            Save
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}

export default App;
