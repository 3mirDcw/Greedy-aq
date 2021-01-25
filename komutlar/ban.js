const Discord = require('discord.js');
const Dogru = "RANDOM"
exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed: {color: Dogru, description: `Bu komutu kullanacak yetkin bulunmamakta.` }})
let kullanıcı = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
if(!kullanıcı)return message.channel.send({embed: {color: Dogru, description: `Lütfen bir kullanıcı "\`etiketleyin\`" veya "\`kullanıcı ID\`" girin.` }})
const member = kullanıcı
if(member.hasPermission("BAN_MEMBERS")) return message.channel.send({embed: {color: Dogru, description: `Etiketlediğiniz Kişide  **Üyeleri Yasakla** Yetkisi Olduğundan İşlem İptal Oldu` }})
if (member) {//afferim
member
.ban({
reason: "ban",
})
.then(() => {
message.channel.send({embed: {color: Dogru, description: `${member} Adlı Kişi Başarıyla Yasaklandı.` }})
})
.catch(err => {
message.channel.send({embed: {color: Dogru, description: `Ne Yazık ki ${member} Adlı Kişi Yasaklayamadım.` }})
console.error(err);
});
} else {
message.channel.send({embed: {color: Dogru, description: `Ne Yazık ki ${member} Adlı Kişi Bulunamadı` }})
}
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["Yasakla", "ban", "Ban"],
permLevel: 0,
};
exports.help = {
name: 'yasakla',
description: 'Sunucudan yasaklar.',
usage: 'yasakla'
};