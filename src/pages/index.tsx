import Head from 'next/head';
import { LandingTemplate } from '@templates/landing';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Rede Cardápio - Início</title>
      </Head>
      <LandingTemplate />
    </>
  );
}
