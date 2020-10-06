import Link from 'next/link';
import { Text } from '@atoms';
import styled from 'styled-components';

const Logo = styled.img`
  height: 80px;
`;

export const LogoMobile = () => (
  <Link href="/">
    <a style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Logo src="/img/cross_paper_white.png" />
      <Text className="flex flex-1">Rede Cardápio</Text>
    </a>
  </Link>
);
