import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export interface TextProps {
  weight?: React.CSSProperties['fontWeight'];
}

export const Text = styled(Typography)<TextProps>`
  font-weight: ${(props) =>
    props.weight ? props.weight : props.theme.typography.fontWeightRegular};
`;
