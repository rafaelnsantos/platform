import { ContactTemplate } from '@templates/Contact';
import { Page } from '@templates/Page';

export default function ContactPage() {
  return <Page title="Contato" Template={<ContactTemplate />} />;
}
