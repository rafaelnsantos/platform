import Link from 'next/link';
import { Icon, Space, Text } from '@atoms';
import styled from 'styled-components';
import { Link as FooterLinkMobileProps } from 'content/links';

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
  return (
    <div className="mr-4">
      <Link href={href}>
        <a>
          <Style>
            {icon && <StyledIcon icon={icon} size="1x" />}
            <Space size={1}></Space>
            <Text>{text}</Text>
          </Style>
        </a>
      </Link>
    </div>
  );
};
