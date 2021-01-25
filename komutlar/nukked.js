const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002
  
let channel = message.mentions.channels.first() || message.channel;
message.channel.send(`Kanal Patlatma Gerçekleşiyor Kanal Ismi : #${channel.name}...`);
let position = channel.position;
setTimeout(() => {
channel.delete();
channel.clone({
name: channel.name,
permissionOverwrites: channel.permissionOverwrites, 
type: channel.type, 
topic: channel.topic, 
nsfw: channel.nsfw, 
bitrate: channel.bitrate, 
userLimit: channel.userLimit, 
rateLimitPerUser: channel.rateLimitPerUser, 
parent: channel.parent, 
reason: 'purged'
}).then(s => {
s.setPosition(position);
s.send('<:INFO:795920163433086997> Greedy Kanalı Ve Mesajları Resetledi Kanalın Kopyası Oluştu');
});
}, 280)

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'nuke'
};// codare ♥