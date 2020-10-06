import { LoadingScreen } from '@organisms/LoadingScreen';
import dynamic from 'next/dynamic';
import { AboutPageProps } from '~/pages/about';

export const AboutTemplate = dynamic<AboutPageProps>(
  () =>
    innerWidth < 600
      ? import('@templates/mobile/AboutMobile').then((imp) => imp.AboutMobile)
      : import('@templates/desktop/AboutDesktop').then((imp) => imp.AboutDesktop),
  {
    ssr: false,
    loading: LoadingScreen,
  }
);
