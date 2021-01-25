const Discord = require('discord.js');

exports.run = async(client, message) => {
let ulke = ["AMERIKA"];
let me = ["12"];
let embed = new Discord.MessageEmbed()
.setColor("RANDOM")

.addField("<a:seviyet:776699095623925781> **__Pingim__**", `**${client.ws.ping}** ms Olarak Hesaplandı.`,true)
.addField("<a:dunya:776699207406583848> **__Bot Lokasyonu__**",`${ulke}`,true)
.addField("<a:asagi:777587171430367263> **__Botun En aşağı pingi__** : ",`**${me}**`,true);
message.channel.send(embed)

}

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['p', 'ms'],
permLevel: 0
};

exports.help = {
name: 'ping',
description: 'Botun pingini gösterir',
usage: 'ping' 
};
