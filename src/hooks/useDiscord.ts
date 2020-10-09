interface DiscordMessage {
  username: string;
  message: string;
}

export const useDiscord = (channel: string) => {
  const sendMessage = ({ username, message }: DiscordMessage) =>
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

  return sendMessage;
};
