const { Client, Collection, Events} = require("discord.js");
const bot = new Client({intents: 3276799});
const { token, botId } = require("./config.json");
const handlerEvents = require ("./Handlers/handlerEvents");
const loadSlashCommands = require ("./loadSlashCommands");

bot.commands = new Collection();

loadSlashCommands(bot);
handlerEvents(bot);
bot.login(token)





