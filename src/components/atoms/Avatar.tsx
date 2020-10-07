import styled from 'styled-components';

interface AvatarProps {
  size: number;
}

export const Avatar = styled.img<AvatarProps>`
  border-radius: ${(props) => props.size / 2}px;
  height: ${(props) => props.size}px;
`;
