const db = require('quick.db')
const Discord = require('discord.js')


exports.run = async (client, message, args) => {
  
          let yetersizyetki = new Discord.MessageEmbed()
          .setColor('RED')
          .setDescription(client.user.username+' Toplu Etiket Engelleme Sistemini kullanabilmek için **Yönetici** yetkisine sahip olman gerekiyor.')
          .setTitle('Hata')
          .setThumbnail(client.user.avatarURL({dynamic: true}))
          .setFooter(client.user.username+' - Toplu Etiket Engel')
          .setTimestamp()
          
                    let açıq = new Discord.MessageEmbed()
          .setColor('GREEN')
          .setDescription(client.user.username+' Toplu Etiket Engelleme Sistemi aktif edildi.')
          .setTitle('Başarılı')
                    .setThumbnail(client.user.avatarURL({dynamic: true}))
          .setFooter(client.user.username+' - Toplu Etiket Engel')
          .setTimestamp()
                    
      let kapalı = new Discord.MessageEmbed()
          .setColor('GREEN')
          .setDescription('Greedy -Toplu Etiket Engelleme Sistemi deaktif edildi.')
          .setTitle('Başarılı')
      .setThumbnail(client.user.avatarURL({dynamic: true}))
          .setFooter(client.user.username+' - Toplu Etiket Engel')
          .setTimestamp()
      
            let hatalıaq = new Discord.MessageEmbed()
          .setColor('ORANGE')
          .setDescription(client.user.username+'Toplu Etiket Engel Sistemi')
            .addField('Ne İşe Yarar?', '```Normal bir kullanıcının çoklu etiket atmasını engeller.```')
            .addField('Kullanım', '```!toplu-etiket-engel ayarla <Etiket Sayısı>```')
            //.setImage('https://cdn.discordapp.com/attachments/706105446372474910/729269391035990076/Scre')
          .setTitle('Ne İşe Yarar?')
            .setThumbnail(client.user.avatarURL({dynamic: true}))
          .setFooter('Greedy - Toplu Etiket Engel')
          .setTimestamp()
  
  if (!message.member.hasPermission('ADMINISTRATOR')) message.channel.send(yetersizyetki)
  
if(!args[0]) return message.channel.send(hatalıaq)
  
  if (args[0] == 'ayarla') {
    db.set(`toplu.etiket.sayı.${message.guild.id}`, args[1])
    db.set(`toplu.etiket.${message.guild.id}`, 'acik')
      message.channel.send(açıq)
 
    
  }
  if (args[0] == 'kapat') {
    db.delete(`toplu.etiket.sayı.${message.guild.id}`)
    db.set(`toplu.etiket.${message.guild.id}`, 'kapali')
      message.channel.send(kapalı)

  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çoklu-etiket-engel'],
  permLevel: 3
};

exports.help = {
  name: 'toplu-etiket-engel',
  description: 'saasayarla.',
  usage: 'toplu-etiket-engel'
};
