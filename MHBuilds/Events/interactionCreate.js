const { Events } = require("discord.js");


module.exports = {

	name: Events.interactionCreate,
	async execute(interaction) {

		if (!interaction.isChatInputCommand()) return;

		const command = require(`../Commands/${interaction.commandName}`);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}
	}
}
