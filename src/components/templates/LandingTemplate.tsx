import { LoadingScreen } from '@organisms/LoadingScreen';
import dynamic from 'next/dynamic';
import { LandingPageProps } from '~/pages';

export const LandingTemplate = dynamic<LandingPageProps>(
  () =>
    innerWidth < 600
      ? import('@templates/mobile/LandingMobile').then((imp) => imp.LandingMobile)
      : import('@templates/desktop/LandingDesktop').then((imp) => imp.LandingDesktop),
  {
    ssr: false,
    loading: LoadingScreen,
  }
);
