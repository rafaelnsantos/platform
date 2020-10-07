import { DashboardTemplate } from '@templates/dashboard';
import { Page } from '@templates/Page';
import { useSession } from 'next-auth/client';

export default function DashboardPage() {
  const [session] = useSession();

  return <Page title="Dashboard">{session && <DashboardTemplate />}</Page>;
}
