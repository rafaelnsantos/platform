import { TextLanding } from '@molecules/LandingText';
import { LandingTemplateProps } from '@templates/LandingTemplate';
import { ContactMobile } from './ContactMobile';
import { LayoutMobile } from './LayoutMobile';
import { PricingMobile } from './PricingMobile';

export function LandingMobile({ texts, prices }: LandingTemplateProps) {
  return (
    <LayoutMobile>
      {texts.map((text, i) => (
        <TextLanding key={i} {...text} i={i + 1} />
      ))}
      <ContactMobile />
      <PricingMobile prices={prices} />
    </LayoutMobile>
  );
}
