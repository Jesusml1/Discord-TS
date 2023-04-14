import { Events, Message } from 'discord.js';
import axios from 'axios';

export const name = Events.MessageCreate;
export async function execute(message: Message) {
  const {
    guild,
    author,
    content,
    member: {
      roles: { cache },
    },
  } = message;

  console.log(`In ${message.guild.name} (${message.channel.id}), the user with roles [${message.member.roles.cache.map(r => r.name)}] ${message.author.username} says: ${message.content}`);

  try {
    await axios.post('https://server-production-73ec.up.railway.app/api/discord/post', {
      guild_id: guild.name,
      author: author.username,
      content,
      roles: cache.map(r => r.name),
    });
  } catch (error) {
    console.log(error);
  }
}
