module.exports.run = async (bot, message, args) => {
    return message.channel.send(`goodbye ${message.author.username}`)
}

module.exports.help = {
    name: "goodbye"
}