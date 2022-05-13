const {Client, Intents} = require("discord.js");
const botConfig = require('./botConfig.json');
const secrets = require('./secrets.json')

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.once("ready", () => {
    console.log(`${client.user.username} is ready`);
    client.user.setActivity("a programming game", {type: "PLAYING"})
});

client.on("messageCreate", message => {
    if (message.author.bot) return;

    var prefix = botConfig.prefix;
    var messageArray = message.content.split(" ");
    var command = messageArray[0];

    if(command === `${prefix}hallo`) {
        return message.channel.send(`hallo ${message.author.username}`)
    }
    if (command === `${prefix}doei`) {
        return message.channel.send(`doei ${message.author.username}`)
    }
});

client.login(secrets.token);