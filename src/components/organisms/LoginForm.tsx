import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { useRouter } from 'next/dist/client/router';
import { toast } from 'react-toastify';
import { useFirebase } from '~/providers/Firebase';
import { TextField } from '@material-ui/core';

interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const firebase = useFirebase();

  const { register, handleSubmit, errors } = useForm<LoginFormValues>({
    validationSchema: object().shape<LoginFormValues>({
      email: string().required().email(),
      password: string().required().min(6),
    }),
  });

  const router = useRouter();

  const onSubmit = async (input: LoginFormValues) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(input.email, input.password)
      .then(() => router.push('/dashboard'))
      .catch((err) => toast.error(err.message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="email"
        name="email"
        inputRef={register}
        label="email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        id="password"
        name="password"
        type="password"
        inputRef={register}
        label="password"
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};
