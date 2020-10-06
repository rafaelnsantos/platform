import { LayoutDesktop } from './LayoutDesktop';
import { Text, Animated } from '@atoms';
import { AboutPageProps } from '~/pages/about';
import styled from 'styled-components';

const AboutText = styled(Text)`
  padding: 10px 100px;
`;

const AboutLayout = styled.div`
  padding: 100px;

  background: lightblue;
`;

export function AboutDesktop(props: AboutPageProps) {
  return (
    <LayoutDesktop>
      <AboutLayout>
        <Animated>
          {props.texts.map((text, i) => (
            <AboutText key={i}>{text}</AboutText>
          ))}
        </Animated>
      </AboutLayout>
    </LayoutDesktop>
  );
}
