import { object, string } from 'yup';
import { TextField, Button } from '@material-ui/core';
import { Space } from '@atoms';
import { sendDiscordMessage } from '~/utils/sendDiscord';
import { useFormik } from 'formik';
import { contact } from 'content/discord';

interface MessageForm {
  name: string;
  phone?: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const { values, handleChange, errors, touched, submitForm, isSubmitting } = useFormik<
    MessageForm
  >({
    initialValues: {
      email: '',
      message: '',
      name: '',
      phone: '',
    },
    validationSchema: object().shape<MessageForm>({
      name: string().required(),
      phone: string(),
      email: string().email().required(),
      message: string().required(),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      await sendDiscordMessage({
        channel: contact,
        username: `${values.name} - ${values.email} - ${values.phone}`,
        message: values.message,
      });
      resetForm();
      setSubmitting(false);
    },
  });

  return (
    <form className="flex flex-col">
      <TextField
        id="name"
        label="Nome"
        error={touched.name && !!errors.name}
        name="name"
        onChange={handleChange}
        helperText={errors.name}
        value={values.name}
      />
      <Space />
      <TextField
        id="phone"
        label="Telefone"
        error={touched.phone && !!errors.phone}
        name="phone"
        onChange={handleChange}
        helperText={errors.phone}
        value={values.phone}
      />
      <Space />
      <TextField
        id="email"
        label="Email"
        error={touched.email && !!errors.email}
        name="email"
        onChange={handleChange}
        helperText={errors.email}
        value={values.email}
      />
      <Space />
      <TextField
        id="message"
        label="Mensagem"
        error={touched.message && !!errors.message}
        name="message"
        onChange={handleChange}
        helperText={errors.message}
        rows={4}
        multiline
        value={values.message}
      />
      <Space />
      {!isSubmitting && (
        <Button variant="contained" color="primary" onClick={submitForm}>
          Enviar
        </Button>
      )}
    </form>
  );
}
