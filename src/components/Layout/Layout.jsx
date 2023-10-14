import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Wrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Wrapper>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </Wrapper>
    </>
  );
};
