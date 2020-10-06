import Head from 'next/head';
import styled from 'styled-components';
import { DynamicHeader } from '@organisms/DynamicHeader';
import { DynamicFooter } from '@organisms/DynamicFooter';

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

export const Page = ({ title, Template }: PageProps) => {
  return (
    <PageContainer>
      <Head key={title}>
        <title>{title} | Rede Cardápio</title>
      </Head>
      <DynamicHeader />
      <Content>{Template}</Content>
      <DynamicFooter />
    </PageContainer>
  );
};
