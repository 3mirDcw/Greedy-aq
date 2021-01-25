const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('<a:xiyarhata:688721793267138659> Bu komutu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
  if (!args[0]) return message.channel.send('<a:xiyarhata:688721793267138659> Sa-as Mesajını Açmak İçin; `!sa-as aç veya kapat`')
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')
      message.channel.send(`<a:yukari:777587028715503617> Başarıyla Greedy-in \`Aleyküm selam\` yazmasını açtın., Artık Greedy \`sa\` yazıldığında cevap verecekdir.`)
    
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')
      message.channel.send(`<a:yukari:777587028715503617> Başarıyla \`Aleyküm selam\` yazmasını kapattınız, Artık Greedy \`sa\` yazıldığında cevap vermeyecekdir.`)
    
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'EDU CODE SA-AS AYARLANA BİLİR !',
  usage: '/sa-as'
};
