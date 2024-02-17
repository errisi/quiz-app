import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Container } from './components/Container/Container';

export const App = () => (
  <Container>
    <Header />
    <Outlet />
  </Container>
);
