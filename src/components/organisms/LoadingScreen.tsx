import dynamic from 'next/dynamic';

const Loading = dynamic<{}>(
  () =>
    innerWidth < 600
      ? import('@molecules/mobile/LoadingScreenMobile').then((m) => m.LoadingScreenMobile)
      : import('@molecules/desktop/LoadingScreenDesktop').then((m) => m.LoadingScreenDesktop),
  {
    ssr: false,
  }
);

export const LoadingScreen = () => <Loading />;
