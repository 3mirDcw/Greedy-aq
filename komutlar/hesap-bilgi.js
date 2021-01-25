const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const ms = require('ms')
exports.run = async (client, message, args) => {
  
let kişi = message.mentions.users.first() || message.author

  let parapara = await db.fetch(`para_${kişi.id}`) || 0  
  /// ARKADASLAR CALMAYIN BIR CODER DERKI ÇALAN KODIR DEĞİL 
    let isim = await db.fetch(`hesapisim_${kişi.id}`) || 'Hesapın Yok'

 const sa = new Discord.MessageEmbed()
 .setDescription(`Isim : ${kişi} \n Coin : ${parapara} \n Hesap Ismi : ${isim}`)
 return message.channel.send(sa)
};
///HAZIRLAYANLAR Clearly_ , FORCEX.js
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'hesap'
};
