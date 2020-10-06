import { Page } from '@templates/Page';
import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';
import { Price } from './pricing';

export interface LandingPageProps {
  texts: { text: string; animation: any }[];
  prices: Price[];
  aboutTexts: string[];
}

const LandingTemplate = dynamic<LandingPageProps>(
  () =>
    innerWidth < 600
      ? import('@templates/mobile/LandingMobile').then((imp) => imp.LandingMobile)
      : import('@templates/desktop/LandingDesktop').then((imp) => imp.LandingDesktop),
  {
    ssr: false,
  }
);

export default function LandingPage(props: LandingPageProps) {
  return <Page title="Início" Template={<LandingTemplate {...props} />} />;
}

export const getStaticProps: GetStaticProps<LandingPageProps> = async () => {
  const texts = await import('content/landing').then((file) => file.texts);
  const prices = await import('content/prices.json').then((json) => json.prices);
  const aboutTexts = await import('content/about.json').then((json) => json.texts);

  return {
    props: {
      texts,
      prices,
      aboutTexts,
    },
  };
};
