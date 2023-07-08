const { SlashCommandBuilder} = require('@discordjs/builders');

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
            await interaction.reply('${elemennt}');
            } else {
                await interaction.reply('LS');
            }

        } else if (arme === 'gs'){
            await interaction.reply('GS');
        }else if (arme === 'db'){
            await interaction.reply('DB');
        }
        
    }

}
