import { LoadingScreen } from '@organisms/LoadingScreen';
import dynamic from 'next/dynamic';

export interface AboutTemplateProps {
  texts: string[];
}

export const AboutTemplate = dynamic<AboutTemplateProps>(
  () =>
    innerWidth < 600
      ? import('@templates/mobile/AboutMobile').then((imp) => imp.AboutMobile)
      : import('@templates/desktop/AboutDesktop').then((imp) => imp.AboutDesktop),
  {
    ssr: false,
    loading: LoadingScreen,
  }
);
