import styled from 'styled-components';
import { DynamicHeader } from '@organisms/DynamicHeader';
import { DynamicFooter } from '@organisms/DynamicFooter';
import { useMediaQuery } from '@material-ui/core';
import { FooterDesktopHeight } from '@molecules/desktop/FooterDesktop';
import { FooterMobileHeight } from '@molecules/mobile/FooterMobile';
import { NextSeo } from 'next-seo';
import { links } from 'content/links';
import { social } from 'content/social';

interface PageProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Page = ({ title, description, children }: PageProps) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'), { noSsr: false });

  return (
    <PageContainer>
      <NextSeo title={`${title} | Rede Cardápio`} description={description} />
      <DynamicHeader links={links} />
      <div style={{ paddingBottom: isMobile ? FooterMobileHeight : FooterDesktopHeight }}>
        {children}
      </div>
      <DynamicFooter links={links} social={social} />
    </PageContainer>
  );
};
