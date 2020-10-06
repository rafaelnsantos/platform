import { Text, Space, Animated } from '@atoms';
import { ContactForm } from '@organisms/ContactForm';
import { Container } from '@material-ui/core';
import { LayoutDesktop } from './LayoutDesktop';

export function ContactDesktop() {
  return (
    <LayoutDesktop>
      <Animated>
        <Container maxWidth="sm">
          <Space />
          <Text>Entre em contato</Text>
          <ContactForm />
        </Container>
      </Animated>
    </LayoutDesktop>
  );
}
