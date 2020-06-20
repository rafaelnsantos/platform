import Head from 'next/head';
import { RegisterTemplate } from '@templates/register';

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Registro</title>
      </Head>
      <RegisterTemplate />
    </>
  );
}
