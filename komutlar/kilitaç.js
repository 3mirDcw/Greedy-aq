const Discord = require('discord.js'); 
exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed: {color: "RANDOM", description: `Bu komutu kullanacak yetkin bulunmamakta.` }})
let kanal = message.mentions.channels.first() || message.channel
let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
kanal.updateOverwrite(everyone, { 'SEND_MESSAGES': null }, 'Kanal Kilidi Açıldı!');
kanal.send({embed: {color: "RANDOM", description: `${message.author} Adlı kişi kanalı açtı.`}})
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["kanal-aç", "kanal-aç"],
permLevel: 0,
};
exports.help = {
name: 'kanalkilitaç',
description: 'Kanal kilit açar.',
usage: 'kanal-aç'
};