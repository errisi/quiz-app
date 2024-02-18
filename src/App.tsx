import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './components/Header/Header';
import { Container } from './components/Container/Container';

export const App = () => (
  <Suspense fallback='en'>
    <Container>
      <Header />
      <Outlet />
    </Container>
  </Suspense>
);
