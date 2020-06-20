export function triggerAction(owner: string, repo: string) {
  // eslint-disable-next-line no-undef
  return fetch(`https://api.github.com/repos/${owner}/${repo}/dispatches`, {
    method: 'POST',
    headers: {
      Authorization: `token ${process.env.GH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line @typescript-eslint/camelcase
      event_type: 'New Payment',
    }),
  });
}
