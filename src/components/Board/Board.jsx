import {
  Box, Button, Input, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import uniqid from 'uniqid';
import {
  CREATE_TASK,
  DELETE_BOARD,
  RENAME_BOARD,
} from '../../helpers/ActionTypes';
import TasksList from '../TasksList/TasksList.jsx';

function Board({ title, id }) {
  const dispatch = useDispatch();
  const [renameForm, setRenameForm] = useState(false);
  const [renameInput, setRenameInput] = useState(title);

  const tasks = useSelector((state) => state.tasks.tasks);

  const handleRenameInput = (e) => {
    setRenameInput(e.target.value);
  };

  const deleteBoard = (e) => {
    e.preventDefault();
    dispatch({ type: DELETE_BOARD, payload: id });
  };

  const showRenameBoardInput = () => {
    setRenameForm(!renameForm);
  };

  const renameBoard = (e) => {
    e.preventDefault();
    if (renameInput.length > 0) {
      setRenameForm(!renameForm);
      dispatch({ type: RENAME_BOARD, payload: { id, title: renameInput } });
    }
  };

  const createTask = (e) => {
    e.preventDefault();
    dispatch({ type: CREATE_TASK, payload: { id: uniqid(), boardId: id } });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '30%',
      }}>
      {renameForm ? (
        <form onSubmit={renameBoard}>
          <Input
            value={renameInput}
            onChange={handleRenameInput}
            sx={{ marginTop: 5, fontSize: '18px' }}
            autoFocus
          />
        </form>
      ) : (
        <Typography
          variant='h5'
          sx={{ marginTop: 5 }}
          onClick={showRenameBoardInput}>
          {title}
        </Typography>
      )}

      <Typography variant='body2' sx={{ color: 'gray' }}>
        {id}
      </Typography>
      <Button variant='contained' sx={{ margin: 1 }} onClick={createTask}>
        Add task
      </Button>
      {tasks.length > 0 ? <TasksList boardId={id} /> : null}
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
