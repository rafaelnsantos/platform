import Head from 'next/head';
import { AboutTemplate } from '@templates/about';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Sobre nós</title>
      </Head>
      <AboutTemplate />
    </>
  );
}
