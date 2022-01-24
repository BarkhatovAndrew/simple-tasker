import { Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Header from '../Header/Header.jsx';
import AddBoard from '../AddBoard/AddBoard.jsx';
import Footer from '../Footer/Footer.jsx';
import BoardsList from '../BoardsList/BoardsList.jsx';

function App() {
  const boards = useSelector((state) => state.boards.boards);

  return (
    <Container>
      <Header />
      <AddBoard />
      {boards.length > 0 ? <BoardsList /> : <Typography variant='h4' sx={{ textAlign: 'center' }}>There no boards yet</Typography>}
      <Footer />
    </Container>
  );
}

export default App;
