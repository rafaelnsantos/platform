import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { fontSecondary } from 'content/theme.json';

export interface TextProps {
  weight?: React.CSSProperties['fontWeight'];
  secondary?: boolean;
  size?: number;
  lineHeight?: number;
}

export const Text = styled(Typography)<TextProps>`
  font-weight: ${(props) =>
    props.weight ? props.weight : props.theme.typography.fontWeightRegular};
  font-family: ${(props) =>
    props.secondary ? fontSecondary : props.theme.typography.fontFamily} !important;
  font-size: ${(props) => props.size || 1}rem !important;
  line-height: ${(props) => props.lineHeight || 1.43} !important;
`;
