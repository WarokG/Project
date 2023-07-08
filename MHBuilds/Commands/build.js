const Discord = require('discord.js');
const { SlashCommandBuilder, SlashCommandStringOption } = require('@discordjs/builders');

module.exports = {

    data: new SlashCommandBuilder()
		.setName('build')
		.setDescription('Donne le build voulu')
        .addStringOption( option =>
            option
                .setName('arme')
                .setDescription('Choisis ton arme')
                .setRequired(true)
                .addChoices({ name: 'LS', value: 'ls' },
				{ name: 'GS', value: 'gs' },
				{ name: 'DB', value: 'db' },))
        .addStringOption( option =>
            option
                .setName('element')
                .setDescription('Choisis ton element')
                .setRequired(false)
                .addChoices({ name: 'RAW', value: 'raw' },
                { name: 'FEU', value: 'feu' },
                { name: 'EAU', value: 'eau' },)        
        )
        
,
    async execute(interaction) {
        const arme = interaction.options.getString('arme');
        const element = interaction.options.getString('element');

        if (arme === 'ls'){
            if (element === 'feu' || element === 'eau' || element === 'raw'){
            await interaction.reply('https://cdn.discordapp.com/attachments/827646319656042536/994613711471919174/unknown.png');
            } else {
                await interaction.reply('LS');
            }

        } else if (arme === 'gs'){
            await interaction.reply('https://cdn.discordapp.com/attachments/827646208411303997/848534227648774144/unknown.png');
        }else if (arme === 'db'){
            await interaction.reply('https://media.discordapp.net/attachments/827646415953068052/829804375752048730/DB_Foudre_Zinogre.png?width=1248&height=702');
        }
        
    }

}