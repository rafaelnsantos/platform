import styled from 'styled-components';

export interface SpaceProps {
  size?: 1 | 2 | 4 | 6 | 8;
}

export const Space = styled.div<SpaceProps>`
  height: ${(props) => props.theme.spacing(props.size || 2)}px;
`;
