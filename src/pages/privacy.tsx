import { Page } from '@templates/Page';
import { PrivacyTemplate } from '@templates/PrivacyTemplate';
import { privacy } from 'content/privacy';

export default function AdminPage() {
  return (
    <Page title="Privacidade">
      <PrivacyTemplate title="Política de Privacidade" privacy={privacy} />
    </Page>
  );
}
