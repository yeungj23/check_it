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

client.login('NzAwNzYzMTA0NjMxNDU1Nzk1.XpvAGw.o9n5pVaIt6CHporGjmZZplKV3jY')