export interface Price {
  price: number;
  text: string;
  months: number;
}

export const prices: Price[] = [
  {
    price: 15,
    text: 'mensal',
    months: 1,
  },
  {
    price: 40,
    text: 'trimestral',
    months: 3,
  },
  {
    price: 70,
    text: 'semestral',
    months: 6,
  },
  {
    price: 120,
    text: 'anual',
    months: 12,
  },
];
