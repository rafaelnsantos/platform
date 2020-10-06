import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { Text } from '@atoms';

interface FooterLinkDesktopProps {
  href: string;
  text: string;
}

export const FooterLinkDesktop = ({ href, text }: FooterLinkDesktopProps) => {
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
