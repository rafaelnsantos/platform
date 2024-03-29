import { Text, Animated } from '@atoms';
import { AboutTemplateProps } from '@templates/AboutTemplate';
import styled from 'styled-components';
import { LayoutMobile } from './LayoutMobile';

const AboutText = styled(Text)`
  padding: 10px 50px;
`;
export function AboutMobile(props: AboutTemplateProps) {
  return (
    <LayoutMobile>
      <Animated>
        {props.texts.map((text, i) => (
          <AboutText height={1.5} align="justify" size={1.4} font="Secondary" key={i}>
            {text}
          </AboutText>
        ))}
      </Animated>
    </LayoutMobile>
  );
}
