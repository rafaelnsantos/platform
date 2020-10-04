import Head from 'next/head';
import { AboutTemplate } from '@templates/about';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Rede Cardápio - Sobre nós</title>
      </Head>
      <AboutTemplate />
    </>
  );
}
