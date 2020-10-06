import { LoadingScreenMobile } from '@molecules/mobile/LoadingScreenMobile';
import { LoadingScreenDesktop } from '@molecules/desktop/LoadingScreenDesktop';
import { useMediaQuery } from '@material-ui/core';

export const LoadingScreen = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'), { noSsr: true });

  const Loading = isMobile ? LoadingScreenMobile : LoadingScreenDesktop;

  return <Loading />;
};
