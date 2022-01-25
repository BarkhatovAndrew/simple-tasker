import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Input,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import uniqid from 'uniqid';
import {
  CREATE_TASK, RENAME_BOARD, SHOW_MODAL_BOARD,
} from '../helpers/ActionTypes';
import TasksList from './TasksList.jsx';

function Board({ title, id }) {
  const dispatch = useDispatch();

  const [renameForm, setRenameForm] = useState(false);
  const [renameInput, setRenameInput] = useState(title);

  const tasks = useSelector((state) => state.tasks.tasks);

  const handleRenameInput = (e) => {
    setRenameInput(e.target.value);
  };

  const showDeleteFormFunc = () => {
    dispatch({ type: SHOW_MODAL_BOARD, payload: id });
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
    <>
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
            sx={{ marginTop: 5, cursor: 'pointer' }}
            onClick={showRenameBoardInput}>
            {title}
          </Typography>
        )}

        <Typography variant='body2' sx={{ color: 'gray' }}>
          id: {id}
        </Typography>
        <Button variant='contained' sx={{ margin: 1 }} onClick={createTask}>
          Add task
        </Button>
        {tasks.length > 0 ? <TasksList boardId={id} /> : null}

        <Accordion sx={{ width: '275px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>Settings</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant='contained'
              color='error'
              sx={{ margin: 1 }}
              onClick={showDeleteFormFunc}>
              Delete board
            </Button>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}

export default Board;
