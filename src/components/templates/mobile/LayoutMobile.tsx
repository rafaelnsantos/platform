import { FooterMobileHeight } from '@molecules/mobile/FooterMobile';
import styled from 'styled-components';

interface LayoutMobileProps {
  children: React.ReactNode;
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(90vh - ${FooterMobileHeight});
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export function LayoutMobile({ children }: LayoutMobileProps) {
  return <Content>{children}</Content>;
}
