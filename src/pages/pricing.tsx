import { Page } from '@templates/Page';
import { PriceTemplate } from '@templates/PriceTemplate';
import { GetStaticProps } from 'next';

export interface Price {
  price: number;
  text: string;
  months: number;
}

export interface PricingPageProps {
  prices: Price[];
}

export default function PricingPage({ prices }: PricingPageProps) {
  return (
    <Page title="Preços">
      <PriceTemplate prices={prices} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps<PricingPageProps> = async () => {
  const prices = await import('content/prices.json').then((json) => json.prices);
  return {
    props: {
      prices,
    },
  };
};
