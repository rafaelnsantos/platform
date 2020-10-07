import { LandingTemplate } from '@templates/LandingTemplate';
import { Page } from '@templates/Page';
import { texts } from 'content/landing';
import { prices } from 'content/prices';
import { texts as aboutTexts } from 'content/about';

export default function LandingPage() {
  return (
    <Page title="Início">
      <LandingTemplate texts={texts} prices={prices} aboutTexts={aboutTexts} />
    </Page>
  );
}
