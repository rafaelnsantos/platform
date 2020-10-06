import { TextLanding } from '@molecules/LandingText';
import { LandingPageProps } from '~/pages';
import { AboutMobile } from './AboutMobile';
import { ContactMobile } from './ContactMobile';
import { LayoutMobile } from './LayoutMobile';
import { PricingMobile } from './PricingMobile';

export function LandingMobile({ texts, prices, aboutTexts }: LandingPageProps) {
  return (
    <LayoutMobile>
      {texts.map((text, i) => (
        <TextLanding key={i} {...text} i={i + 1} />
      ))}
      <AboutMobile texts={aboutTexts} />
      <ContactMobile />
      <PricingMobile prices={prices} />
    </LayoutMobile>
  );
}
