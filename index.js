const {Client, Intents, Collection} = require("discord.js");
const botConfig = require('./botConfig.json');
const secrets = require('./secrets.json');
const fs = require("fs");

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.help.name, command);
    console.log(`The file ${command.help.name}.js is loaded`);
}

client.once("ready", () => {
    console.log(`${client.user.username} is ready`);
    client.user.setActivity("a programming game", {type: "PLAYING"});
});

client.on("messageCreate", async message => {
    if (message.author.bot) return;

    var prefix = botConfig.prefix;
    var messageArray = message.content.split(" ");
    var command = messageArray[0];

    if (!message.content.startsWith(prefix)) return;

    const commandData = client.commands.get(command.slice(prefix.length));

    if (!commandData) return;

    var arguments = messageArray.slice(1);

    try {
        await commandData.run(client, message, arguments);
        console.log(`${client.user.username} has handeld a command`)
    } catch (error) {
        console.log(error)
        await message.reply("Something went wrong with the command, please contact a moderator or admin");
    }
});

client.login(secrets.token);