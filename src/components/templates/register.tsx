import { Text, BackgroundParticles, Space } from '@atoms';
import { RegisterForm } from '@organisms/RegisterForm';
import { Paper, Container } from '@material-ui/core';
import Link from 'next/link';
import styled from 'styled-components';

const PaperStyled = styled(Paper)`
  padding: ${(props) => props.theme.spacing(4)}px;
`;

const StyledText = styled(Text)`
  color: ${(props) => props.theme.palette.getContrastText(props.theme.palette.primary.dark)};
`;

export function RegisterTemplate() {
  return (
    <Container maxWidth="sm">
      <BackgroundParticles />
      <div className="flex flex-col">
        <StyledText align="center" variant="h4">
          Crie um cardápio online
        </StyledText>
        <Space size={6} />
        <PaperStyled>
          <Text>Digite seu email e uma senha com no mínimo 6 digitos</Text>
          <Space />
          <RegisterForm />
        </PaperStyled>
        <Space size={1} />
        <StyledText align="center">
          Já tem uma conta?{' '}
          <Link href="/login">
            <a>Log in</a>
          </Link>
        </StyledText>
      </div>
    </Container>
  );
}
