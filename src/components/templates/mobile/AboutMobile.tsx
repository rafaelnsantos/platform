import { Text, Animated } from '@atoms';
import styled from 'styled-components';
import { AboutPageProps } from '~/pages/about';
import { LayoutMobile } from './LayoutMobile';

const AboutText = styled(Text)`
  padding: 10px 50px;
`;
export function AboutMobile(props: AboutPageProps) {
  return (
    <LayoutMobile>
      <Animated>
        {props.texts.map((text, i) => (
          <AboutText height={2} size={1.4} font="Secondary" key={i}>
            {text}
          </AboutText>
        ))}
      </Animated>
    </LayoutMobile>
  );
}
