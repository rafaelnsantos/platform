import dynamic from 'next/dynamic';

export const DynamicHeader = dynamic<{}>(
  () =>
    innerWidth < 600
      ? import('@molecules/mobile/HeaderMobile').then((c) => c.Header)
      : import('@molecules/desktop/HeaderDesktop').then((c) => c.Header),
  { ssr: false }
);
