import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import gql from 'graphql-tag';
import { useRouter } from 'next/dist/client/router';
import { toast } from 'react-toastify';
import { RegisterInput, useRegisterMutation } from '~/graphql/__generated_operations__';
import { TextField, Button } from '@material-ui/core';
import { Space } from '@atoms';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      name
    }
  }
`;

export const RegisterForm = () => {
  const { register, handleSubmit, errors, watch } = useForm<RegisterInput>({
    validationSchema: object().shape<RegisterInput>({
      email: string().required().email(),
      password: string().required().min(6),
      domain: string().required(),
    }),
  });

  const domain = watch('domain', '');

  const router = useRouter();

  const [mutate, { loading }] = useRegisterMutation();

  const onSubmit = (input: RegisterInput) => {
    mutate({
      variables: { input },
    })
      .then(() => router.push('/dashboard'))
      .catch((err) => toast.error(err.message.replace('GraphQL error: ', '')));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <TextField
        id="email"
        label="email"
        error={!!errors.email}
        name="email"
        inputRef={register}
        helperText={errors.email?.message}
      />
      <Space />
      <TextField
        id="password"
        label="password"
        type="password"
        error={!!errors.password}
        name="password"
        inputRef={register}
        helperText={errors.password?.message}
      />
      <Space />
      <TextField
        id="domain"
        label={domain ? `Site: ${domain}.lanches.top` : 'Site'}
        error={!!errors.domain}
        name="domain"
        inputRef={register}
        helperText={errors.domain?.message}
      />
      <Space />
      <Button variant="contained" color="primary" type="submit" disabled={loading}>
        Registrar
      </Button>
    </form>
  );
};
