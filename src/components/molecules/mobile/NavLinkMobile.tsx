import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { Space, Text } from '@atoms';
import styled from 'styled-components';
import { Icon } from '~/components/atoms/Icon';
import { Link as NavLinkMobileProps } from 'content/links';

const Style = styled.div<{active?:boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px 20px 15px 40px;
  color: ${props => props.active ? props.theme.palette.primary.main : "black"};
`;

const StyledIcon = styled(Icon)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 10px;
`;

export const NavLinkMobile = ({ href, text, icon }: NavLinkMobileProps) => {
  const { route } = useRouter();
  const active = route === href;
  return (
    <div className="mr-4">
      {route === href ? (
        <Style active>
          {icon && <StyledIcon icon={icon} size="2x" color="inherit"/>}
          <Text size={1.5} weight="bold" color="inherit">{text}</Text>
        </Style>
      ) : (
        <Link href={href}>
          <a>
            <Style>
              {icon && <StyledIcon icon={icon} size="2x" />}
              <Space size={1}></Space>
              <Text size={1.5}>{text}</Text>
            </Style>
          </a>
        </Link>
      )}
    </div>
  );
};
