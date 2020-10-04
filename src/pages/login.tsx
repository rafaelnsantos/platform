import Head from 'next/head';
import { LoginTemplate } from '@templates/login';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Rede Cardápio - Login</title>
      </Head>
      <LoginTemplate />
    </>
  );
}
