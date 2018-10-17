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













// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
