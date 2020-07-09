import { Text } from '@atoms';
import { ContactForm } from '@organisms/ContactForm';
import { Header } from '@organisms/Header';

export function ContactTemplate() {
  return (
    <div>
      <Header />
      <Text>Contact page</Text>
      <ContactForm />
    </div>
  );
}
