import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { Text } from '@atoms';

interface HeaderLinkProps {
  href: string;
  text: string;
}

export const HeaderLink = ({ href, text }: HeaderLinkProps) => {
  const { route } = useRouter();

  return (
    <div className="mr-4">
      {route === href ? (
        <Text secondary className="font-bold">
          {text}
        </Text>
      ) : (
        <Link href={href}>
          <a>
            <Text secondary>{text}</Text>
          </a>
        </Link>
      )}
    </div>
  );
};
