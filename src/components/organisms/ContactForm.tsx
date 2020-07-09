import { object, string } from 'yup';
import { FullMessage, sendMessage } from '~/utils/sendMessage';
import { useForm } from 'react-hook-form';

export function ContactForm() {
  const { register, handleSubmit, errors, reset } = useForm<FullMessage>({
    validationSchema: object().shape<FullMessage>({
      name: string().required(),
      phone: string(),
      email: string().email().required(),
      message: string().required(),
    }),
  });

  const submit = (values: FullMessage) => {
    sendMessage(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      {/* <FormInput id="name" label="name" error={errors.name}>
        <TextInput ref={register} name="name" />
      </FormInput>
      <FormInput id="phone" label="phone" error={errors.phone}>
        <TextInput ref={register} name="phone" />
      </FormInput>
      <FormInput id="email" label="email" error={errors.email}>
        <TextInput ref={register} type="email" name="email" />
      </FormInput>
      <FormInput id="message" label="message" error={errors.message}>
        <textarea ref={register} id="message" name="message" />
      </FormInput> */}
      <button type="submit">Enviar</button>
    </form>
  );
}
