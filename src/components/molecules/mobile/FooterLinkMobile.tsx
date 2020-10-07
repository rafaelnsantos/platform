import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { Icon, Space, Text } from '@atoms';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
interface FooterLinkMobileProps {
  href: string;
  text: string;
  icon?: IconDefinition;
}
const Style = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 20px 10px 40px;
`;
const StyledIcon = styled(Icon)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 10px;
`;
export const FooterLinkMobile = ({ href, text, icon }: FooterLinkMobileProps) => {
  const { route } = useRouter();

  return (
    <div className="mr-4">
      {route === href ? (
        <Style>
          {icon && <StyledIcon icon={icon} size="1x" />}
          <Text weight="bold">{text}</Text>
        </Style>
      ) : (
        <Link href={href}>
          <a>
            <Style>
              {icon && <StyledIcon icon={icon} size="1x" />}
              <Space size={1}></Space>
              <Text>{text}</Text>
            </Style>
          </a>
        </Link>
      )}
    </div>
  );
};
