const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js');
module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    const Discord = require("discord.js")
     const embed22 = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`**${message.guild.name}** Adlı sunucuda **${message.author.tag}** adlı kullanıcı **${cmd.help.name}** komutunu kullandı.`)
 client.guilds.cache.get('714503020641255425').channels.cache.get('790875613438935111').send(embed22)

     /* client.channels.cache.get("695706913291370516").send(new Discord.MessageEmbed() .setColor(#2196f3") .setThumbnail(message.author.avatarURL({dynamic:true})) .setDescription("__Greedy__ \n **Bir Komut Kullanıldı!** \n\n **Komut İsmi** → ``" + cmd.help.name + "`` \n **Kullanan Kişi** → <@"+message.author.id+"> | ``"+client.users.cache.get(message.author.id).tag+"`` \n **Sunucu** → ``"+message.guild.name+"``") 
                 */        
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
}
/*
if (cmd){
    client.channels.cache.get("695706913291370516").send(new Discord.MessageEmbed() .setColor(#2196f3") .setThumbnail(message.author.avatarURL({dynamic:true})) .setDescription("__Greedy__ \n **Bir Komut Kullanıldı!** \n\n **Komut İsmi** → ``" + cmd.help.name + "`` \n **Kullanan Kişi** → <@"+message.author.id+"> | ``"+client.users.cache.get(message.author.id).tag+"`` \n **Sunucu** → ``"+message.guild.name+"``") 
  }
let prefixs = ["greedy", "@greedy"];
    let prefix = "!";
    for (var i = 0; i < prefixes.length; i++) {
      if (message.content.startsWith(prefixes[i])) prefix = prefixes[i];
    }*/
