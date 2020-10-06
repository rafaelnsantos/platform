import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { Space, Text } from '@atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

interface NavLinkMobileProps {
  href: string;
  text: string;
  icon: IconDefinition;
}

const Style = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 20px 10px 40px;
`;

const IconStyle = styled(FontAwesomeIcon)`
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
`;

export const NavLinkMobile = ({ href, text, icon }: NavLinkMobileProps) => {
  const { route } = useRouter();

  return (
    <div className="mr-4">
      {route === href ? (
        <Style>
          {icon && <IconStyle icon={icon} />}
          <Text weight="bold">{text}</Text>
        </Style>
      ) : (
        <Link href={href}>
          <a>
            <Style>
              {icon && <IconStyle icon={icon} />}
              <Space size={1}></Space>
              <Text>{text}</Text>
            </Style>
          </a>
        </Link>
      )}
    </div>
  );
};
