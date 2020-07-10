const headers = {
  'content-type': 'application/json',
  authorization: `Bearer ${process.env.VERCE_TOKEN}`,
};

export const vercel = {
  addDomain: (name: string, siteUrl: string) =>
    // eslint-disable-next-line no-undef
    fetch('https://vercel.com/api/v4/domains/lanches.top/records', {
      method: 'POST',
      headers,
      body: JSON.stringify({ name: name, ttl: 0, type: 'CNAME', value: siteUrl }),
    }),
};
