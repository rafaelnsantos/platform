import { TextLanding } from '@molecules/LandingText';
import { LandingPageProps } from '~/pages';
import { AboutDesktop } from './AboutDesktop';
import { ContactDesktop } from './ContactDesktop';
import { LayoutDesktop } from './LayoutDesktop';
import { PricingDesktop } from './PricingDesktop';

export function LandingDesktop({ texts, prices, aboutTexts }: LandingPageProps) {
  return (
    <LayoutDesktop>
      {texts.map((text, i) => (
        <TextLanding key={i} i={i + 1} {...text} />
      ))}
      <AboutDesktop texts={aboutTexts} />
      <ContactDesktop />
      <PricingDesktop prices={prices} />
    </LayoutDesktop>
  );
}
