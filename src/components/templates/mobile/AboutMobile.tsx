import { Text, Animated } from '@atoms';
import { AboutPageProps } from '~/pages/about';
import { LayoutMobile } from './LayoutMobile';

export function AboutMobile(props: AboutPageProps) {
  return (
    <LayoutMobile>
      <Animated>
        {props.texts.map((text, i) => (
          <Text height={2} size={1.4} font="Secondary" key={i}>
            {text}
          </Text>
        ))}
      </Animated>
    </LayoutMobile>
  );
}
