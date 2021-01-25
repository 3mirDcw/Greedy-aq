const Discord = require('discord.js');
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")
module.exports.run = (client, message, args, level) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) {
    
    return message.reply('Otomatik rol kapatmak için `Rolleri Yönet` yetkisine sahip olmanız gerek.');
  } else {
let fetchle = db.fetch(`otorol.rol_${message.guild.id}`)
let fetchle2 = db.fetch(`otorol.kanal_${message.guild.id}`)
if(fetchle === undefined) {
  message.reply(`Bu sunucuda \`Otorol\` özelliği ayarlanmamış.`)
}
else if(fetchle2 === undefined) {
   message.reply(`Bu sunucuda \`Otorol\` özelliği ayarlanmamış.`)
} else {
  db.delete(`otorol.rol_${message.guild.id}`)
  db.delete(`otorol.kanal_${message.guild.id}`)
  message.reply(`Bu sunucu için \`Otorol\` başarıyla kapatıldı.`)




}
} 
}
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kapat-otorol"],
    permLevel: 0
};

module.exports.help = {
    name: 'kapat-otorol',
      description: 'Otorol sistemini kapatırsınız.',
  usage: 'kapat-otorol',
   kategori: 'moderasyon'
};
