const Discord = require('discord.js');
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")
module.exports.run = (client, message, args, level) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) {
    
    return message.reply('Otomatik rol özelliğini kullanabilmek için `Rolleri Yönet` yetkisine sahip olmanız gerek.');
  } else {
    
  let rol = message.mentions.roles.first()
  let kanal = message.mentions.channels.first()
  
if(!rol) {
  
  message.reply('Otomatik rol özelliğini kullanmak için lütfen bir rol etiketleyin. `Etiketlediğiniz rol botun rolünün üstü olmamalıdır!`')

} else {
  
if(!kanal) {
  
  message.reply('Otomatik rol özelliğini kullanmak için lütfen bir kanal etiketleyin. `Etiketlediğiniz kanal silinmemelidir! Aksi takdirde otorol kapanır.`')

} else {
  db.set(`otoyazi.sunucu.${message.guild.id}`, 'acik')
  db.set(`otorol.rol.${message.guild.id}`, rol.id)
  db.set(`otorol.kanal.${message.guild.id}`, kanal.id)
  message.reply(`Bu sunucu için yeni giren kullanıcılara \`${rol.name}\` rolü verilecek \`${kanal.name}\` kanalına yazı atılıcak. Bu özelliği kapatmak için tekrar \`otorol kapat\` yazın, otorol yazısını kapatmak için ise \`otoyazı kapat\` komutunu kullanın.`)

}


  }
} 
}
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["otorol"],
    permLevel: 0
};

module.exports.help = {
    name: 'otorol',
      description: 'Otorol sistemini açarsınız.',
  usage: 'otorol',
   kategori: 'moderasyon'
};
