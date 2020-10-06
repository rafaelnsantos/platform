import { LayoutDesktop } from './LayoutDesktop';

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

interface PricingDesktopProps {
  prices: PriceComponentProps[];
}

export function PricingDesktop(props: PricingDesktopProps) {
  return (
    <LayoutDesktop>
      {props.prices.map((price, i) => (
        <PriceComponent {...price} key={i} />
      ))}
    </LayoutDesktop>
  );
}
