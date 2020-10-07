import { Link } from 'content/links';
import dynamic from 'next/dynamic';

export interface HeaderTemplateProps {
  links: Link[];
}

export const DynamicHeader = dynamic<HeaderTemplateProps>(
  () =>
    innerWidth < 600
      ? import('@molecules/mobile/HeaderMobile').then((c) => c.HeaderMobile)
      : import('@molecules/desktop/HeaderDesktop').then((c) => c.HeaderDesktop),
  { ssr: false }
);
