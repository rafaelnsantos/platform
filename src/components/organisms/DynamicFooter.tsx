import dynamic from 'next/dynamic';
export const DynamicFooter = dynamic<{}>(
  () =>
    innerWidth < 600
      ? import('@molecules/mobile/FooterMobile').then((c) => c.Footer)
      : import('@molecules/desktop/FooterDesktop').then((c) => c.FooterDesktop),
  { ssr: false }
);
