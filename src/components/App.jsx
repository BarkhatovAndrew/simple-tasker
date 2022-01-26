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
import Header from './Header.jsx';
import AddBoard from './AddBoard.jsx';
import BoardsList from './BoardsList.jsx';
import style from '../helpers/styles';
import {
  DELETE_BOARD,
  DELETE_TASK,
  EDIT_TASK,
  HANDLE_DESCRIPTION,
  HANDLE_TITLE,
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
  const darkmode = useSelector((state) => state.darkmode.dark);
  const title = useSelector((state) => state.editForm.title);
  const description = useSelector((state) => state.editForm.description);

  // TODO: как редактировать body ?

  if (darkmode) {
    document.body.style.backgroundColor = '#1a1a1a';
  } else {
    document.body.style.backgroundColor = 'white';
  }

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
    dispatch({ type: SHOW_EDIT_TASK });
  };

  const editInput = (e) => {
    dispatch({ type: HANDLE_TITLE, payload: e.target.value });
  };

  const editDesc = (e) => {
    dispatch({ type: HANDLE_DESCRIPTION, payload: e.target.value });
  };

  const saveChanges = () => {
    dispatch({ type: EDIT_TASK, payload: { id: taskId, title, description } });
    dispatch({ type: SHOW_EDIT_TASK });
  };

  return (
    <Container
      maxWidth
      sx={
        darkmode
          ? {
            backgroundColor: '#1a1a1a', height: '100vh', padding: 5, color: 'white', transition: '.5s',
          }
          : {
            backgroundColor: 'white', height: '100vh', padding: 5, transition: '.5s',
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

      {/* TODO: в каком компоненте использовать модальные окна */}

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
