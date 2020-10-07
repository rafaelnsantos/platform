import { LayoutDesktop } from './LayoutDesktop';
import { Text, Animated } from '@atoms';
import styled from 'styled-components';
import { AboutTemplateProps } from '@templates/AboutTemplate';

const AboutText = styled(Text)`
  padding: 10px 100px;
`;

const AboutLayout = styled.div`
  padding: 100px;

  background: lightblue;
`;

export function AboutDesktop(props: AboutTemplateProps) {
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
