import Head from 'next/head';
import styled from 'styled-components';
import { DynamicHeader } from '@organisms/DynamicHeader';
import { DynamicFooter } from '@organisms/DynamicFooter';
import { useMediaQuery } from '@material-ui/core';
import { FooterDesktopHeight } from '@molecules/desktop/FooterDesktop';
import { FooterMobileHeight } from '@molecules/mobile/FooterMobile';

interface PageProps {
  title: string;
  children: React.ReactNode;
}

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Page = ({ title, children }: PageProps) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'), { noSsr: false });

  return (
    <PageContainer>
      <Head key={title}>
        <title>{title} | Rede Cardápio</title>
      </Head>
      <DynamicHeader />
      <div style={{ paddingBottom: isMobile ? FooterMobileHeight : FooterDesktopHeight }}>
        {children}
      </div>
      <DynamicFooter />
    </PageContainer>
  );
};
