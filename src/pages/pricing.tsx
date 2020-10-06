import { Page } from '@templates/Page';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

export interface Price {
  price: number;
  text: string;
  months: number;
}

interface PricingPageProps {
  prices: Price[];
}

const PriceTemplate = dynamic<PricingPageProps>(
  () =>
    innerWidth < 600
      ? import('@templates/mobile/PricingMobile').then((imp) => imp.PricingMobile)
      : import('@templates/desktop/PricingDesktop').then((imp) => imp.PricingDesktop),
  {
    ssr: false,
  }
);

export default function PricingPage({ prices }: PricingPageProps) {
  return <Page title="Preços" Template={<PriceTemplate prices={prices} />} />;
}

export const getStaticProps: GetStaticProps<PricingPageProps> = async () => {
  const prices = await import('content/prices.json').then((json) => json.prices);
  return {
    props: {
      prices,
    },
  };
};
