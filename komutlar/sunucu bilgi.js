const Discord = require("discord.js");

exports.run = (client, message) => {
  let predata = ["false"];
  let sunucu = new Discord.MessageEmbed()
    .setAuthor("Sunucu Bilgi", message.guild.iconURL())
    .setThumbnail(message.guild.iconURL())
  .setColor("RANDOM")
    .addField("Sunucu İsmi", message.guild.name)
    .addField("Sunucu İdsi", message.guild.id)
    .addField("Sunucu Bölgesi", message.guild.region)
    .addField("Premium Sunucumu ", "hayır")
    .addField(
      "Roller:",
      message.guild.roles.cache.map(role => role.name).join(", "),
      true
    )
    .setTimestamp()
    .setFooter("Sunucu Bilgi", message.guild.iconURL());
  return message.channel.send(sunucu);
};

module.exports.conf = {
  aliases: ["sunucubilgi"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "sunucu-bilgi",
  description: "",
  usage: "sunucu-bilgi"
};
