import { Text } from '@atoms';
import { LoginForm } from '@organisms/LoginForm';

export function LoginTemplate() {
  return (
    <div>
      <Text>Login page</Text>
      <LoginForm />
    </div>
  );
}
