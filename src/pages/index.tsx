import { LandingTemplate } from '@templates/Landing';
import { Page } from '@templates/Page';
import { GetStaticProps } from 'next';
import { Price } from './pricing';

export interface LandingPageProps {
  texts: { text: string[]; animation: any }[];
  prices: Price[];
  aboutTexts: string[];
}

export default function LandingPage(props: LandingPageProps) {
  return (
    <Page title="Início">
      <LandingTemplate {...props} />
    </Page>
  );
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
