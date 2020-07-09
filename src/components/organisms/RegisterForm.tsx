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
  const { register, handleSubmit, errors } = useForm<RegisterInput>({
    validationSchema: object().shape<RegisterInput>({
      email: string().required().email(),
      password: string().required().min(6),
    }),
  });

  const router = useRouter();

  const [mutate, { loading }] = useRegisterMutation();

  const onSubmit = (input: RegisterInput) => {
    mutate({
      variables: { input },
    })
      .then(() => router.push('/dashboard'))
      .catch((err) => toast.error(err.message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" className="flex flex-col">
      <TextField
        id="email"
        label="email"
        error={!!errors.email}
        name="email"
        inputRef={register}
        helperText={errors.email?.message}
        variant="outlined"
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
        variant="outlined"
      />
      <Space />
      <Button variant="contained" color="primary" type="submit" disabled={loading}>
        Registrar
      </Button>
    </form>
  );
};
