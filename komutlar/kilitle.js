const Discord = require('discord.js'); 
exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed: {color: "BLACK", description: `Bu komutu kullanacak yetkin bulunmamakta.` }})
let kanal = message.mentions.channels.first() || message.channel
let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
kanal.updateOverwrite(everyone, { 'SEND_MESSAGES': false }, '**Greedy Kanalı Kilitledi** Açmak İçin **!kanalkilitaç** Yazmanız Yeterli');
kanal.send({embed: {color: "BLACK", description: `${message.author} Adlı kişi Greedy Kullanarak kanalı kilitledi. | **Kiliti Kaldırmak için**  **!kanalkilitaç** Yazmanız Yeterli`}})
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["kilit", "Kanalkilitle"],
permLevel: 0,
};
exports.help = {
name: 'kanalkilitle',
description: 'Kanal kilitler.',
usage: 'kanal-kapat'
};