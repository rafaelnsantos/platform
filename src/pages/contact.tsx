import { Page } from '@templates/Page';
import dynamic from 'next/dynamic';

const ContactTemplate = dynamic<{}>(
  () =>
    innerWidth < 600
      ? import('@templates/mobile/ContactMobile').then((imp) => imp.ContactMobile)
      : import('@templates/desktop/ContactDesktop').then((imp) => imp.ContactDesktop),
  {
    ssr: false,
  }
);

export default function ContactPage() {
  return <Page title="Contato" Template={<ContactTemplate />} />;
}
