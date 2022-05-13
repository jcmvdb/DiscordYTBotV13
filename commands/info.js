const discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    var botEmbed = new discord.MessageEmbed()
        .setTitle("Title")
        .setDescription('Description')
        .setColor('RED')
        .addField("Field Name", "Field Value")
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter("Footer", "https://i.imgur.com/wSTFkRM.png");

    return message.channel.send({embed: [botEmbed]});
}

module.exports.help = {
    name: "info"
}