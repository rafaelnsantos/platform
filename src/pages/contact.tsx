import Head from 'next/head';
import { ContactTemplate } from '@templates/contact';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>
      <ContactTemplate />
    </>
  );
}
