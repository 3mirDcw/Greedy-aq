const Discord = require('discord.js');
const Dogru = "RANDOM";
exports.run = async (client, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed: {color: Dogru, description: `<a:xiyarhata:688721793267138659> Bu komutu kullanacak yetkin bulunmamakta.` }})
let mesajsayisi = args[0]
if(!mesajsayisi) return message.channel.send({embed: {color: Dogru, description: `<a:xiyarhata:688721793267138659> 1 ile 400 arasında sayı girmeyi unuttun.` }})
if (mesajsayisi > 400) return message.channel.send({embed: {color: Dogru, description: `<a:xiyarhata:688721793267138659> **1 ile 400 arasında sayı girmeyi unuttun.**` }})
if (mesajsayisi < 1) return message.channel.send({embed: {color: Dogru, description: `<a:xiyarhata:688721793267138659> **1 ile 400 arasında sayı girmeyi unuttun.**` }})
try {
await message.channel.bulkDelete(mesajsayisi)
await message.channel.send({embed: {color: Dogru, description: `<:onay:795919966024106034> Başarıyla ${mesajsayisi} Kadar Mesaj Silindi`}});
} catch(error) {
message.channel.send({embed: {color: Dogru, description: `<a:xiyarhata:688721793267138659> Discord API 14 Günden Eski Mesajları Silmeme İzin Vermiyorlar`}})}
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["sil", "temizle"],
permLevel: 0,
};
exports.help = {
name: 'sil',
description: 'Kanaldaki mesajları siler.',
usage: 'sil'
};
