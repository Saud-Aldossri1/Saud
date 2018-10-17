const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "p!"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
    client.user.setActivity("+1 || p!help",{type: 'WATCHING'})

});


client.on('message', message => {
    if (message.content === 'p!ping') {
    	message.reply('pong');
  	}
});




client.on('message', message => {
    if (message.content.startsWith("p!stats")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Stats Bot / Info ')
            .addField('``Uptime``', timeCon(process.uptime()), true)
            .addField('``Ping Is``' , `${Date.now() - message.createdTimestamp}` + '``Ms``', true)
            .addField('``RAM Usage``', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('``Guild Count``', client.guilds.size, true)
            .addField('``Bot In channel``' , `${client.channels.size}` , true)
            .addField('``Users rout``' ,`${client.users.size}` , true)
            .addField('``Name Bot Or tag``' , `${client.user.tag}` , true)
            .addField('``Bot Id``' , `${client.user.id}` , true)
            .setFooter('PowerBOT / Team')
    })
}
});







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
