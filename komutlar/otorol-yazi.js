const Discord = require('discord.js');
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")
module.exports.run = (client, message, args, level) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) {
    
    return message.reply('Otoyazı özelliğini kapatmak için `Rolleri Yönet` yetkisine sahip olmanız gerek.');
  } else {
let fetchle = db.fetch(`otoyazi.sunucu.${message.guild.id}`)

if(fetchle === undefined) {
  message.reply(`Bu sunucuda \`Otoyazı\` özelliği ayarlanmamış.`)
} else {
  db.delete(`otoyazi.sunucu.${message.guild.id}`)

  message.reply(`Bu sunucu için \`Otoyazı\` başarıyla kapatıldı.`)




}
} 
}
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kapat-otoyazı"],
    permLevel: 0
};

module.exports.help = {
    name: 'kapat-otoyazı',
      description: 'Otorol sistemindeki Otoyazı özelliğini kapatırsınız.',
  usage: 'kapat-otoyazı',
   kategori: 'moderasyon'
};
