import { LoadingScreen } from '@organisms/LoadingScreen';
import dynamic from 'next/dynamic';
import { PricingPageProps } from '~/pages/pricing';

export const PriceTemplate = dynamic<PricingPageProps>(
  () =>
    innerWidth < 600
      ? import('@templates/mobile/PricingMobile').then((imp) => imp.PricingMobile)
      : import('@templates/desktop/PricingDesktop').then((imp) => imp.PricingDesktop),
  {
    ssr: false,
    loading: LoadingScreen,
  }
);
