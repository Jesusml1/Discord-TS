import { Client, GatewayIntentBits, Partials } from "discord.js";
import path from "node:path";
import fs from "node:fs";
import dotenv from "dotenv";
dotenv.config();

import { DISCORD_TOKEN } from "./config";

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMessages,
	],
	partials: [Partials.Channel],
});

// Reading event files
const eventsPath = path.join(__dirname, "events");
const eventFiles = fs
	.readdirSync(eventsPath)
	.filter((file) => file.endsWith(".js") || file.endsWith(".ts"));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client
	.login(DISCORD_TOKEN)
	.catch((error) => console.error("Discord.Client.Login.Error", error));
