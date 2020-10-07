import { PricingTemplateProps } from '@templates/PriceTemplate';
import { LayoutMobile } from './LayoutMobile';

interface PriceComponentProps {
  price: number;
  text: string;
  months: number;
}

const PriceComponent = ({ price, text }: PriceComponentProps) => (
  <div>
    {price}
    {text}
  </div>
);

export function PricingMobile(props: PricingTemplateProps) {
  return (
    <LayoutMobile>
      {props.prices.map((price, i) => (
        <PriceComponent {...price} key={i} />
      ))}
    </LayoutMobile>
  );
}
