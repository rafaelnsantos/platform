import { FooterLinkDesktop } from './FooterLinkDesktop';
import styled from 'styled-components';
import { FooterTemplateProps } from '@organisms/DynamicFooter';
import { FooterContainer } from '~/components/atoms/FooterContainer';
import { Contact } from '@molecules/Contact';

export const FooterDesktopHeight = '10rem';

const Container = styled(FooterContainer)`
  height: ${FooterDesktopHeight};
`;
const Block = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const FooterDesktop = (props: FooterTemplateProps) => (
  <Container className="flex flex-row justify-evenly">
    <Block>
      {props.links.map((link) => (
        <FooterLinkDesktop key={link.href} {...link} />
      ))}
    </Block>
    <hr></hr>
    <Block>
      <Contact social={props.social} />
    </Block>
  </Container>
);
