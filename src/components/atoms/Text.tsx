import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Color } from '~/utils/generateColors';

export interface TextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: Color;
  secondary?: boolean;
}

export const Text = styled((props: TextProps) => {
  return <div {...props} />;
})`
  color: ${(props) => props.theme.colors[props.color || 'primary']};
  font-family: ${(props) => props.theme.fonts[props.secondary ? 'secondary' : 'primary']};
`;
