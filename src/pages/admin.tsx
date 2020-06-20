import Head from 'next/head';
import { AdminTemplate } from '@templates/admin';

export default function AdminPage() {
  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
      <AdminTemplate />
    </>
  );
}
