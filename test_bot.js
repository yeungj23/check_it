const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});
client.on('message', message => {
    if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    };
});

client.login('NzAwNzYzMTA0NjMxNDU1Nzk1.Xpu33A.THaZDHvTiMyqY0G69ASlkZK7AmU')