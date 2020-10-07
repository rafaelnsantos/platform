import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { fontSecondary } from 'content/theme.json';
import { CSSProperties } from 'react';

export interface TextProps {
  weight?: CSSProperties['fontWeight'];
  size?: number;
  height?: number;
  font?: 'Secondary' | 'Primary';
  align?: CSSProperties['textAlign'];
}

export const Text = styled(Typography)<TextProps>`
  font-weight: ${(props) =>
    props.weight ? props.weight : props.theme.typography.fontWeightRegular} !important;
  font-family: ${(props) =>
    props.font === 'Secondary' ? fontSecondary : props.theme.typography.fontFamily} !important;
  font-size: ${(props) => props.size || 1}rem !important;
  line-height: ${(props) => props.height || 1.43} !important;
  text-align: ${(props) => props.align || 'auto'} !important;
`;
