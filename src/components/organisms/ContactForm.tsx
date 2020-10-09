import { Button } from '@material-ui/core';
import { Space, TextInput } from '@atoms';
import { contact } from 'content/discord';
import { useFormik, FormikProvider } from 'formik';
import { object, string } from 'yup';
import { useDiscord } from '~/hooks/useDiscord';
import { useDateTime } from '~/hooks/useDateTime';

interface Contact {
  name: string;
  phone?: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const sendMessage = useDiscord(contact);

  useDateTime((date) => console.log(date), 1000);

  const formik = useFormik<Contact>({
    initialValues: {
      email: '',
      message: '',
      name: '',
      phone: '',
    },
    validationSchema: object().shape<Contact>({
      name: string().required(),
      phone: string(),
      email: string().email().required(),
      message: string().required(),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      await sendMessage({
        username: `${values.name} - ${values.email} - ${values.phone}`,
        message: values.message,
      });
      resetForm();
      setSubmitting(false);
    },
  });

  const { submitForm, isSubmitting } = formik;

  return (
    <FormikProvider value={formik}>
      <form className="flex flex-col">
        <TextInput label="Nome" id="name" />
        <Space />
        <TextInput label="Telefone" id="phone" />
        <Space />
        <TextInput label="Email" id="email" />
        <Space />
        <TextInput label="Mensagem" id="message" rows={4} multiline />
        <Space />
        {!isSubmitting && (
          <Button variant="contained" color="primary" onClick={submitForm}>
            Enviar
          </Button>
        )}
      </form>
    </FormikProvider>
  );
}
