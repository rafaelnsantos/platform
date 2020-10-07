import { LoadingScreen } from '@organisms/LoadingScreen';
import { Price } from 'content/prices';
import dynamic from 'next/dynamic';

export interface PricingTemplateProps {
  prices: Price[];
}

export const PriceTemplate = dynamic<PricingTemplateProps>(
  () =>
    innerWidth < 600
      ? import('@templates/mobile/PricingMobile').then((imp) => imp.PricingMobile)
      : import('@templates/desktop/PricingDesktop').then((imp) => imp.PricingDesktop),
  {
    ssr: false,
    loading: LoadingScreen,
  }
);
