import Head from 'next/head';
import { PricingTemplate } from '@templates/pricing';

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Rede Cardápio - Preços</title>
      </Head>
      <PricingTemplate />
    </>
  );
}
