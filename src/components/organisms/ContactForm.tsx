import { object, string } from 'yup';
import { FullMessage, sendMessage } from '~/utils/sendMessage';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { Space } from '@atoms';

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
    <form onSubmit={handleSubmit(submit)} className="flex flex-col">
      <TextField
        id="name"
        label="Nome"
        error={!!errors.name}
        name="name"
        inputRef={register}
        helperText={errors.name?.message}
      />
      <Space />
      <TextField
        id="phone"
        label="Telefone"
        error={!!errors.phone}
        name="phone"
        inputRef={register}
        helperText={errors.phone?.message}
      />
      <Space />
      <TextField
        id="email"
        label="Email"
        error={!!errors.email}
        name="email"
        inputRef={register}
        helperText={errors.email?.message}
      />
      <Space />
      <TextField
        id="message"
        label="Mensagem"
        error={!!errors.message}
        name="message"
        inputRef={register}
        helperText={errors.message?.message}
        rows={4}
        multiline
      />
      <Space />
      <Button variant="contained" color="primary" type="submit">
        Enviar
      </Button>
    </form>
  );
}
