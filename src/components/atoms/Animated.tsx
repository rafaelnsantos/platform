import { motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import styled from 'styled-components';
import { useIsVisible } from '~/hooks/useIsVisible';

const itemAnimated = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -1000 },
};

const Animate = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: itemAnimated,
}))`
  width: inherit;
`;

interface AnimatedProps {
  children: ReactNode;
}
export const Animated = (props: AnimatedProps) => {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref, '0px 0px 0px 1000px');
  return (
    <Animate ref={ref} animate={isVisible ? 'visible' : 'hidden'}>
      {props.children}
    </Animate>
  );
};
