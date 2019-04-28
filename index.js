const Discord = require('discord.js');
const client = new Discord.Client();

client.on(`ready`, () => {
    console.log(`Running as ${client.user.tag}`)
    client.user.setActivity("Minecraft", {type: "PLAYING"});
});
client.on('message', msg => {
  if (msg.content.startsWith("?")) {
    if (msg.author.id !== '533549393073405952') return;
      msg.delete()
  let botembed = new Discord.RichEmbed()
    .setDescription(`**${msg.content.slice(1)}**`)
    .setColor(`7289DA`)
  msg.channel.send(botembed)
  }
});

client.login(process.env.BOT_TOKEN);
