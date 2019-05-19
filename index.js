const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', (guild) => {

    console.log(`Running client: ${client.user.tag}!`);
    client.user.setActivity('Advertising for MTS')
});
client.on('message', msg => {
    if(msg.author.id !== '579705916857909249') return;

    if(msg.content === '.') {
        msg.delete()
        let embed = new Discord.RichEmbed()
            .setTitle('Join Mayflower Taxi Service Today!')
            .setURL("https://discord.gg/xBHtGg4")
            .setColor("e2b96c")
            //.setImage("https://cdn.discordapp.com/attachments/579697843720159235/579709661071278111/mts1111.png")
            .setThumbnail("https://cdn.discordapp.com/attachments/579697843720159235/579709661071278111/mts1111.png")
            .setFooter("Mayflower Taxi Service", "https://cdn.discordapp.com/attachments/579697843720159235/579709641567502356/MTS11.png")
            .setDescription("Old company being revamped! Join MTS today and apply!")
            .setAuthor("Mayflower Taxi Service", "https://cdn.discordapp.com/attachments/579697843720159235/579709641567502356/MTS11.png", "https://discord.gg/xBHtGg4")
        msg.channel.send(embed)
        msg.channel.send("https://discord.gg/xBHtGg4")
    }
})

client.login(process.env.BOT_TOKEN);
