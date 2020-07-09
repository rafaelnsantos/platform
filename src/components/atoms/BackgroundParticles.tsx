import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import { useMediaQuery } from '@material-ui/core';

const StyledParticles = styled(Particles)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  overflow: hidden;
  background: ${(props) => props.theme.palette.primary.dark};
`;

export function BackgroundParticles() {
  const match = useMediaQuery((theme) => theme.breakpoints.down('sm'), { noSsr: true });

  return (
    <StyledParticles
      params={{
        particles: {
          lineLinked: {
            width: 0.2,
            color: '#0F0',
            opacity: 1,
          },
          number: {
            value: match ? 20 : 50,
          },
          shape: {
            type: 'circle',
            stroke: {
              color: '#fff',
              width: 0.7,
            },
          },
        },
      }}
    />
  );
}
