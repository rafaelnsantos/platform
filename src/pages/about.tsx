import { AboutTemplate } from '@templates/AboutTemplate';
import { Page } from '@templates/Page';
import { texts } from 'content/about';

export default function AboutPage() {
  return (
    <Page title="Sobre nós">
      <AboutTemplate texts={texts} />
    </Page>
  );
}
