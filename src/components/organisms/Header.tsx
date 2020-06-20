import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import { useFirebase } from '~/providers/Firebase';
import { HeaderLink } from '@molecules/HeaderLink';
import { useSelector } from 'react-redux';

const Container = styled.header`
  background: ${(props) => props.theme.colors.secondary};
`;

export const Header = () => {
  const user = useSelector((state) => state.user.email);
  const firebase = useFirebase();
  const router = useRouter();

  const logout = () => {
    firebase.auth().signOut();
    router.push('/');
  };

  return (
    <Container className="sticky top-0">
      <nav className="flex flex-row">
        {user ? (
          <>
            <HeaderLink href="/dashboard" text="dashboard" />
            <button onClick={logout}>logout</button>
          </>
        ) : (
          <>
            <HeaderLink href="/" text="home" />
            <HeaderLink href="/contact" text="contact" />
            <HeaderLink href="/about" text="about" />
            <HeaderLink href="/login" text="login" />
            <HeaderLink href="/register" text="register" />
          </>
        )}
      </nav>
    </Container>
  );
};
