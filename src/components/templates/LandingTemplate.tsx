import { LoadingScreen } from '@organisms/LoadingScreen';
import { Price } from 'content/prices';
import dynamic from 'next/dynamic';

export interface LandingTemplateProps {
  texts: { text: string[]; animation: any }[];
  prices: Price[];
  aboutTexts: string[];
}

export const LandingTemplate = dynamic<LandingTemplateProps>(
  () =>
    innerWidth < 600
      ? import('@templates/mobile/LandingMobile').then((imp) => imp.LandingMobile)
      : import('@templates/desktop/LandingDesktop').then((imp) => imp.LandingDesktop),
  {
    ssr: false,
    loading: LoadingScreen,
  }
);
