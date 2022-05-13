module.exports.run = async (bot, message, args) => {
    return message.channel.send(`hello ${message.author.username}`)
}

module.exports.help = {
    name: "hello"
}