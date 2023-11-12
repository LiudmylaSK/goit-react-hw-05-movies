import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import styled from 'styled-components';

 const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  font-size: 20px;

`;

const Link = styled(NavLink)`
  &.active {
    color: blue;
  }
`;

export const Layout = () => {
    return (
        <Container>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </header>
          
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Container>
    );
};