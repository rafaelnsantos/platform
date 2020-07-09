import Head from 'next/head';
import { RegisterTemplate } from '@templates/register';
import withApollo from '~/config/withApollo';

function RegisterPage() {
  return (
    <>
      <Head>
        <title>Registro</title>
      </Head>
      <RegisterTemplate />
    </>
  );
}

export default withApollo(RegisterPage);
