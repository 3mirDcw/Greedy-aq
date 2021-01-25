/*const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("Greedy - Come To Our Support Server For Bugs Or Support g!support ", client.user.avatarURL())
    .addField("**• Botun Sahibi**", "Nicat.dcw")
    .addField("** • All Pings**","Message Ping: {ping1} ms \nBot Ping: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField(" **• Memory Usage**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("** • Uptime Time**", seksizaman, true)
    .addField(" **• Members**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField(" **• Servers**", client.guilds.cache.size.toLocaleString(), true)
    .addField(" **• Channels**", client.channels.cache.size.toLocaleString(), true)
    .addField("** • Discord.JS  Version**", "v" + Discord.version, true)
    .addField(" ** • Node.JS Version**", `${process.version}`, true)
    .addField(" ** • Guild Voice  Channels**", client.voice.connections.size, true)
    .addField(" ** • CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField(" ** • Bit**", `\`${os.arch()}\``, true)
    .addField("** • OS**", `\`\`${os.platform()}\`\``, true)

    .addField(" • Bot Invite**"," [Davet Et](https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&scope=bot&permissions=8)");
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i","botinfo"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Greedy Istatistic",
  usage: "istatistik"
};*/
const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  let shards = [" > SHARD 1 : AKTIF \n > SHARD 2 : AKTIF \n >  SHARD 3 : AKTIF \n > SHARD 4 : AKTIF \n > SHARD 5 : AKTIF \n > SHARD 6 : KAPALI \n > SHARD 7 : KAPALI \n > SHARD 8 : AKTIF \n > SHARD 9 : AKTIF \n > SHARD 10 : AKTIF"];
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.MessageEmbed()
  .setColor('#00f5ff')
  .setFooter('© https://greedybot.xyz™', bot.user.avatarURL)
  .addField("» **Botun Sahibi**", "<@738367168961577020>")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 2000/ 2024).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", seksizaman)
  .addField("» **Kullanıcılar**" , bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» **Sunucular**", bot.guilds.cache.size.toLocaleString(), true)
  .addField("» **Kanallar**", bot.channels.cache.size.toLocaleString(), true) 
  .addField("» ** Shard Bilgileri**", shards)
  .addField("» ** Sürümler**","> Discord.js » 12.5.0 \n > Mysql » 8.0.22 \n > Php » 7.1 \n > GreedyDB » 0.2 (BETA) \n > Database Sağlayıcı : Dcw Monitor")
 return message.channel.send(istatistikler);
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i', 'YEDEK KOMUT2'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};
