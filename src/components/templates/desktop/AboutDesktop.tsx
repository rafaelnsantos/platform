import { LayoutDesktop } from './LayoutDesktop';
import { Text, Animated } from '@atoms';
import { AboutPageProps } from '~/pages/about';

export function AboutDesktop(props: AboutPageProps) {
  return (
    <LayoutDesktop>
      <Animated>
        {props.texts.map((text, i) => (
          <Text key={i}>{text}</Text>
        ))}
      </Animated>
    </LayoutDesktop>
  );
}
