import { Link } from 'content/links';
import { SocialMedia } from 'content/social';
import dynamic from 'next/dynamic';

export interface FooterTemplateProps {
  social: SocialMedia;
  links: Link[];
}

export const DynamicFooter = dynamic<FooterTemplateProps>(
  () =>
    innerWidth < 600
      ? import('@molecules/mobile/FooterMobile').then((c) => c.FooterMobile)
      : import('@molecules/desktop/FooterDesktop').then((c) => c.FooterDesktop),
  { ssr: false }
);
