import { Text, Animated } from '@atoms';
import { ContactForm } from '@organisms/ContactForm';
import { Container } from '@material-ui/core';
import { LayoutMobile } from './LayoutMobile';

export function ContactMobile() {
  return (
    <LayoutMobile>
      <Animated>
        <Container>
          <Text>Entre em contato</Text>
          <ContactForm />
        </Container>
      </Animated>
    </LayoutMobile>
  );
}
