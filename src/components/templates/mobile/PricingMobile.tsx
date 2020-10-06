import { LayoutMobile } from './LayoutMobile';

interface PriceComponentProps {
  price: number;
  text: string;
}

const PriceComponent = ({ price, text }: PriceComponentProps) => (
  <div>
    {price}
    {text}
  </div>
);

interface PricingMobileProps {
  prices: PriceComponentProps[];
}

export function PricingMobile(props: PricingMobileProps) {
  return (
    <LayoutMobile>
      {props.prices.map((price, i) => (
        <PriceComponent {...price} key={i} />
      ))}
    </LayoutMobile>
  );
}
