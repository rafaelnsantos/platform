import { discord } from 'content/settings.json';

export interface FullMessage {
  name: string;
  phone?: string;
  email: string;
  message: string;
}

const message = (contact: FullMessage) => `${contact.message}`;

export function sendMessage(contact: FullMessage) {
  // eslint-disable-next-line no-undef
  fetch(discord, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: `${contact.name} - ${contact.email} - ${contact.phone}`,
      content: message(contact),
    }),
  });
}
