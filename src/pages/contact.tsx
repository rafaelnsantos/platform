import Head from 'next/head';
import { ContactTemplate } from '@templates/contact';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Rede Cardápio - Contato</title>
      </Head>
      <ContactTemplate />
    </>
  );
}
