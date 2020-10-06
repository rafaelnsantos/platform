import Head from 'next/head';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

interface PageProps {
  title: string;
  Template: JSX.Element;
}

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Content = styled.div`
  padding-bottom: 2.5rem;
`;

const Footer = dynamic<{}>(
  () =>
    innerWidth < 600
      ? import('@organisms/mobile/FooterMobile').then((c) => c.Footer)
      : import('@organisms/desktop/FooterDesktop').then((c) => c.Footer),
  { ssr: false }
);

const Header = dynamic<{}>(
  () =>
    innerWidth < 600
      ? import('@organisms/mobile/HeaderMobile').then((c) => c.Header)
      : import('@organisms/desktop/HeaderDesktop').then((c) => c.Header),
  { ssr: false }
);

export const Page = ({ title, Template }: PageProps) => {
  return (
    <PageContainer>
      <Head key={title}>
        <title>{title} | Rede Cardápio</title>
      </Head>
      <Header />
      <Content>{Template}</Content>
      <Footer />
    </PageContainer>
  );
};
