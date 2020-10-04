import Head from 'next/head';
import { DashboardTemplate } from '@templates/dashboard';
import { useSelector } from 'react-redux';

export default function DashboardPage() {
  const user = useSelector((store) => store.user.email);

  if (!user) return <></>;

  return (
    <>
      <Head>
        <title>Rede Cardápio - Dashboard</title>
      </Head>
      <DashboardTemplate />
    </>
  );
}
