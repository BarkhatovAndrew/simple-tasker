import { Box, Button, Typography } from '@mui/material';
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DARK_MODE_ON } from '../helpers/ActionTypes';

function Header() {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.darkmode.dark);

  // useEffect(() => {
  //   if (localStorage.getItem('dark') === 'true') { dispatch({ type: DARK_MODE_ON }); } else {
  //     localStorage.setItem('dark', false);
  //   }
  // }, [dispatch]);

  const darkOn = () => {
    dispatch({ type: DARK_MODE_ON });
    localStorage.setItem('dark', !dark);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: 0 }}>
      <Typography variant='h2'>
       Simple Tasker
      </Typography>
      <Button sx={{ position: 'absolute', right: '10%', top: 50 }} onClick={darkOn}>Dark mode</Button>
    </Box>
  );
}

export default Header;
