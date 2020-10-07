import { Page } from '@templates/Page';
import { PriceTemplate } from '@templates/PriceTemplate';
import { prices } from 'content/prices';

export default function PricingPage() {
  return (
    <Page title="Preços">
      <PriceTemplate prices={prices} />
    </Page>
  );
}
