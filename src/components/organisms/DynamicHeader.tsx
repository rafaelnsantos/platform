import dynamic from 'next/dynamic';

export const DynamicHeader = dynamic<{}>(
  () =>
    innerWidth < 600
      ? import('@organisms/mobile/HeaderMobile').then((c) => c.Header)
      : import('@organisms/desktop/HeaderDesktop').then((c) => c.Header),
  { ssr: false }
);
