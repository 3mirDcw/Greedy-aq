const Discord = require('discord.js');
const Dogru = "BLACK"
exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed: {color: Dogru, description: `Bu komutu kullanacak yetkin bulunmamakta.` }})
let kullanıcı = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
if(!kullanıcı)return message.channel.send({embed: {color: Dogru, description: `Lütfen bir kullanıcı "\`etiketleyin\`" veya "\`kullanıcı ID\`" girin.` }})
const member = kullanıcı
if(member.hasPermission("KICK_MEMBERS")) return message.channel.send({embed: {color: Dogru, description: `Etiketlediğin Kişide  **Üyeleri At** Yetkisi Olduğundan Işlem Iptal edildi!` }})
if (member) {
member
.kick({
reason: "kick",
})
.then(() => {
message.channel.send({embed: {color: Dogru, description: `${member} Adlı Kişi Başarıyla Atıldı.` }})
})
.catch(err => {
message.channel.send({embed: {color: Dogru, description: `Ne yazık ki ${member} Adlı Kişi Atılamadı` }})
console.error(err);
});
} else {
message.channel.send({embed: {color: Dogru, description: `Ne yazık ki ${member} Adlı Kişiyi Bulunamadı` }})
}
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["Kick", "at", "At"],
permLevel: 0,
};
exports.help = {
name: 'kick'
};