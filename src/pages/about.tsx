import { LoadingScreen } from '@organisms/LoadingScreen';
import { Page } from '@templates/Page';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

export interface AboutPageProps {
  texts: string[];
}

const AboutTemplate = dynamic<AboutPageProps>(
  () =>
    innerWidth < 600
      ? import('@templates/mobile/AboutMobile').then((imp) => imp.AboutMobile)
      : import('@templates/desktop/AboutDesktop').then((imp) => imp.AboutDesktop),
  {
    ssr: false,
    // eslint-disable-next-line react/display-name
    loading: () => <LoadingScreen />,
  }
);

export default function AboutPage(props: AboutPageProps) {
  return <Page title="Sobre nós" Template={<AboutTemplate texts={props.texts} />} />;
}

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const texts = await import('content/about.json').then((json) => json.texts);
  return {
    props: {
      texts,
    },
  };
};
