import { Events, Message } from "discord.js";

// interface MessageCreated {
//   message_id: string;
//   message_content: string;
//   author_user_id: string;
//   author_username: string;
//   channel_id: string;
//   guild_id: string;
// }

// interface InsertResult {
//   error?: Error;
// }

export const name = Events.MessageCreate;
export async function execute(message: Message) {
	// const messageCreated: MessageCreated = {
	//   message_id: message.id,
	//   message_content: message.content,
	//   author_user_id: message.author.id,
	//   author_username: message.author.username,
	//   channel_id: message.channelId,
	//   guild_id: message.guildId
	// };

  console.log(message);

	console.log(
		`In ${message.guild.name} (${message.channel.id}), the user with roles [${message.member.roles.cache.map(r => r.name)}] ${message.author.username} says: ${message.content}`
	);

	try {
		//  API call to create message
		//   const { error }: InsertResult = await supabaseClient
		//     .from('discord_messages')
		//     .insert(messageCreated);
	} catch (error) {
		//   if (error) {
		//     console.log(error);
		//     return;
		//   }
	}

	// console.log(`Message ${messageCreated.message_id} created`);
}
