const Discord = require("discord.js");
const client = new Discord.Client();
// client.on("ready", () => {
//     console.log(`Running as ${client.user.tag}`)
//     client.user.setActivity('Im big gay.')
// });
client.on("message", message => {

    let msg = message.content.toLowerCase();
    if (msg.startsWith("?")) {
        if (message.author.id !== "533549393073405952") return;

        message.delete()
        let botembed = new Discord.RichEmbed()
           .setDescription(`**${message.content.slice(1)}**`)
           .setColor("7289DA")
           message.channel.send(botembed)
        //message.channel.send(message.content.slice(1))
    }
    if (msg === '') {
        if (message.author.id !== "533549393073405952") return;

        console.log('test')
    }

});
client.login(process.env.BOT_TOKEN);
