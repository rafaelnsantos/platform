import { Text, Space } from '@atoms';
import { ContactForm } from '@organisms/ContactForm';
import { Header } from '@organisms/Header';
import { Container } from '@material-ui/core';

export function ContactTemplate() {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Space />
        <Text>Entre em contato</Text>
        <ContactForm />
      </Container>
    </>
  );
}
