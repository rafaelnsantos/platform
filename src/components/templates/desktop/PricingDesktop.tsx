import { PricingTemplateProps } from '@templates/PriceTemplate';
import { LayoutDesktop } from './LayoutDesktop';

interface PriceComponentProps {
  price: number;
  text: string;
  months: number;
}

const PriceComponent = ({ price, text, months }: PriceComponentProps) => (
  <div>
    {price}
    {text}
    {months}
  </div>
);

export function PricingDesktop(props: PricingTemplateProps) {
  return (
    <LayoutDesktop>
      {props.prices.map((price, i) => (
        <PriceComponent {...price} key={i} />
      ))}
    </LayoutDesktop>
  );
}
