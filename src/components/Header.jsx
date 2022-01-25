import { Box, Typography } from '@mui/material';

function Header() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: 5 }}>
      <Typography variant='h2'>
       Hello
      </Typography>
    </Box>
  );
}

export default Header;
