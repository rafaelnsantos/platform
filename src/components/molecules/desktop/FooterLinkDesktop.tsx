import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { Text } from '@atoms';
import { Icon } from '~/components/atoms/Icon';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface FooterLinkDesktopProps {
  href: string;
  text: string;
  icon?: IconDefinition;
}

export const FooterLinkDesktop = ({ href, text, icon }: FooterLinkDesktopProps) => {
  const { route } = useRouter();

  return (
    <div className="mr-4">
      {route === href ? (
        <Text weight="bold">{text}</Text>
      ) : (
        <Link href={href}>
          <a>
            <Text>{text}</Text>
          </a>
        </Link>
      )}
    </div>
  );
};
