const Discord = require('discord.js')
const client = new Discord.Client();
const db = require('quick.db')
exports.run = async (bot, message, args, client) => {
   const id = require('quick.db')
   if(message.author.id !== "782860084707328051") return message.channel.send(":x:Hey Sen Benim Sahibim Değilsin!:x:");
 
  let guildid = args[0]
  if(!guildid) return message.channel.send(':x:Ayrılınacak sunucunun id sini girmelisin!:x:')
bot.guilds.cache.get(guildid).leave();
const embed = new Discord.MessageEmbed()
 
.addField('İşlem Başarılı ',':white_check_mark: Başarıyla sunucudan Ayrıldım')
.addField(`Ayrıldığım Sunucunun İD si:`,`ID: ${guildid}`)
message.channel.send(embed)
 
}
exports.conf = {
  enabled:true,
  guildOnly:false,
  aliases : [],
  permLevel:0
};
exports.help = {
  name: 'botayrıl',
  description:'Belirtilen İD deki Sunucudan Ayrılır',
  usage:'sunucudan-ayrıl '
};
