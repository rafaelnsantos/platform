interface DiscordMessage {
  channel: string;
  username: string;
  message: string;
}

export const sendDiscordMessage = ({ channel, username, message }: DiscordMessage) =>
  fetch(channel, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: `${username}`,
      content: `${message}`,
    }),
  });
