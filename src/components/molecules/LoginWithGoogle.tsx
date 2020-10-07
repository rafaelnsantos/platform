import { Icon, Text } from '@atoms';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { signIn } from 'next-auth/client';

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const StyledText = styled(Text)`
  margin-left: 10px !important;
`;

export function LoginWithGoogle() {
  return (
    <Button onClick={() => signIn('google')}>
      <Icon size="2x" icon={faGoogle} />
      <StyledText>Entrar com Google</StyledText>
    </Button>
  );
}
