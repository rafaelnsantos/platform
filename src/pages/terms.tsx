import { Page } from '@templates/Page';
import { PrivacyTemplate } from '@templates/PrivacyTemplate';
import { terms } from 'content/terms';

export default function AdminPage() {
  return (
    <Page title="Termos de Uso">
      <PrivacyTemplate title="Termos de Uso" privacy={terms} />
    </Page>
  );
}
