import Head from 'next/head';
import { LandingTemplate } from '@templates/landing';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <LandingTemplate />
    </>
  );
}
