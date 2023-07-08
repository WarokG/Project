const { Client, Collection, Events} = require("discord.js");
const bot = new Client({intents: 3276799});
const { token, botId } = require("./config.json");
const handlerEvents = require ("./Handlers/handlerEvents");
const loadSlashCommands = require ("./loadSlashCommands");
const fs = require("fs");
const path = require('node:path');

bot.commands = new Collection();
const folderPath = path.join(__dirname, "Commands");

loadSlashCommands(bot);
handlerEvents(bot);
bot.login(token)





