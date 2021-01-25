const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('PURPLE')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(message.author.username + " Sana Tokenimi Verirsem Bot Patlar .ddddd")
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Token'],
  permLevel: 0
};

exports.help = {
  name: 'token',
  description: 'Ambulans Çağırır (ciddiye almayın)',
  usage: 'ara112'
};
