/* eslint-disable @typescript-eslint/camelcase */
import NetlifyAPI from 'netlify';

export const netlifyApi = new NetlifyAPI(process.env.NETLIFY_TOKEN);

const headers = {
  'content-type': 'application/json',
  authorization: `Bearer ${process.env.NETLIFY_TOKEN}`,
};

export const netlify = {
  ...netlifyApi,

  enableIdentity: (siteId: string) =>
    // eslint-disable-next-line no-undef
    fetch(`https://api.netlify.com/api/v1/sites/${siteId}/identity`, {
      method: 'POST',
      headers,
    })
      .then((res) => res.json())
      .then((res) => res.id),

  enableGitGateway: (siteId: string, repo: string) =>
    // eslint-disable-next-line no-undef
    fetch(`https://api.netlify.com/api/v1/sites/${siteId}/services/git/instances`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        github: {
          access_token: process.env.GH_TOKEN,
          repo,
        },
      }),
    }),

  disableSignup: (siteId: string, identityId: string) =>
    // eslint-disable-next-line no-undef
    fetch(`https://api.netlify.com/api/v1/sites/${siteId}/identity/${identityId}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        disable_signup: true,
      }),
    }),

  inviteUser: (siteId: string, identityId: string, email: string) =>
    // eslint-disable-next-line no-undef
    fetch(`https://api.netlify.com/api/v1/sites/${siteId}/identity/${identityId}/users/invite`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        invites: [
          {
            email,
          },
        ],
      }),
    }),

  enableGoogle: (siteId: string, identityId: string) =>
    // eslint-disable-next-line no-undef
    fetch(`https://api.netlify.com/api/v1/sites/${siteId}/identity/${identityId}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        external: {
          bitbucket: { enabled: false },
          email: {},
          facebook: { enabled: false },
          github: { enabled: false },
          gitlab: { enabled: false },
          google: { enabled: true, client_id: '', secret: '' },
          saml: { enabled: false },
        },
      }),
    }),

  setupIdentity: (siteId: string, identityId: string, url: string) =>
    // eslint-disable-next-line no-undef
    fetch(`https://api.netlify.com/api/v1/sites/${siteId}/identity/${identityId}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        external: {
          bitbucket: { enabled: false },
          email: {},
          facebook: { enabled: false },
          github: { enabled: false },
          gitlab: { enabled: false },
          google: { enabled: true, client_id: '', secret: '' },
          saml: { enabled: false },
        },
        disable_signup: true,
        subjects: {
          invite: `You've been invited to join ${url}`,
          recovery: `Reset your password for ${url}`,
          email_change: `Verify your new sign-in email for ${url}`,
        },
        templates: {
          invite: '/emails/invitation.html',
          recovery: '/emails/password-recovery.html',
          email_change: '/emails/email-change.html',
        },
      }),
    }),
};
