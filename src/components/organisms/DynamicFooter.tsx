import dynamic from 'next/dynamic';

export const DynamicFooter = dynamic<{}>(
  () =>
    innerWidth < 600
      ? import('@organisms/mobile/FooterMobile').then((c) => c.Footer)
      : import('@organisms/desktop/FooterDesktop').then((c) => c.Footer),
  { ssr: false }
);
