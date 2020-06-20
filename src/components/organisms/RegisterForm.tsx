import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import gql from 'graphql-tag';
import { useRouter } from 'next/dist/client/router';
import { toast } from 'react-toastify';
import { RegisterInput } from '~/graphql/__generated_operations__';
import { useFirebase } from '~/providers/Firebase';
import { FormInput } from '@molecules/FormInput';
import { TextInput } from '@atoms';

gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      name
    }
  }
`;

export const RegisterForm = () => {
  const firebase = useFirebase();

  const { register, handleSubmit, errors } = useForm<RegisterInput>({
    validationSchema: object().shape<RegisterInput>({
      email: string().required().email(),
      password: string().required().min(6),
    }),
  });

  const router = useRouter();

  const onSubmit = (input: RegisterInput) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(input.email, input.password)
      .then(() => router.push('/dashboard'))
      .catch((err) => toast.error(err.message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput id="email" label="email" error={errors.email}>
        <TextInput ref={register} type="text" id="email" name="email" />
      </FormInput>
      <FormInput id="password" label="password" error={errors.password}>
        <input ref={register} type="password" id="password" name="password" />
      </FormInput>
      <button type="submit">Enviar</button>
    </form>
  );
};
