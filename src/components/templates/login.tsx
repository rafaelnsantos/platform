import { Text, BackgroundParticles, Space } from '@atoms';
import { LoginForm } from '@organisms/LoginForm';
import { Paper, Container } from '@material-ui/core';
import Link from 'next/link';
import styled from 'styled-components';

const PaperStyled = styled(Paper)`
  padding: ${(props) => props.theme.spacing(4)}px;
`;

const StyledText = styled(Text)`
  color: ${(props) => props.theme.palette.getContrastText(props.theme.palette.primary.dark)};
`;

export function LoginTemplate() {
  return (
    <Container maxWidth="sm">
      <BackgroundParticles />
      <div className="flex flex-col">
        <StyledText align="center" variant="h4">
          Faça login
        </StyledText>
        <Space size={6} />
        <PaperStyled>
          <LoginForm />
        </PaperStyled>
        <Space size={1} />
        <StyledText align="center">
          <Link href="/login">
            <a>Esqueceu a senha?</a>
          </Link>
        </StyledText>
        <Space size={1} />
        <StyledText align="center">
          <Link href="/register">
            <a>Não possui uma conta? Registre-se aqui</a>
          </Link>
        </StyledText>
      </div>
    </Container>
  );
}
