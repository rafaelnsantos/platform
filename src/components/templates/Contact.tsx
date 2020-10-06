import { LoadingScreen } from '@organisms/LoadingScreen';
import dynamic from 'next/dynamic';

export const ContactTemplate = dynamic<{}>(
  () =>
    innerWidth < 600
      ? import('@templates/mobile/ContactMobile').then((imp) => imp.ContactMobile)
      : import('@templates/desktop/ContactDesktop').then((imp) => imp.ContactDesktop),
  {
    ssr: false,
    loading: LoadingScreen,
  }
);
