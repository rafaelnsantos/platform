import { AboutTemplate } from '@templates/AboutTemplate';
import { Page } from '@templates/Page';
import { GetStaticProps } from 'next';

export interface AboutPageProps {
  texts: string[];
}

export default function AboutPage(props: AboutPageProps) {
  return (
    <Page title="Sobre nós">
      <AboutTemplate texts={props.texts} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const texts = await import('content/about.json').then((json) => json.texts);
  return {
    props: {
      texts,
    },
  };
};
