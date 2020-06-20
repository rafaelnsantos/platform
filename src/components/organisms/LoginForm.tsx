import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { useRouter } from 'next/dist/client/router';
import { toast } from 'react-toastify';
import { useFirebase } from '~/providers/Firebase';
import { TextInput } from '@atoms';
import { FormInput } from '@molecules/FormInput';

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
      <FormInput id="email" label="email" error={errors.email}>
        <TextInput ref={register} name="email" />
      </FormInput>
      <FormInput id="password" label="password" error={errors.password}>
        <TextInput ref={register} type="password" name="password" />
      </FormInput>
      <button type="submit">Enviar</button>
    </form>
  );
};
