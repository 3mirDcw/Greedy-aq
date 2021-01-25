const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete();
  let question = args.join(" ");
  let user = message.author.username;
  if (!question)
    return message.channel
      .send(
        new Discord.MessageEmbed().addField('!Uyarı!',`❌ **Yazı Yazman Gerek** ❌`)
      )
      .then(m => m.delete(5000));
  console.log(
    "Oylama adlı komut yürütüldü " +
      message.author.username +
      "#" +
      message.author.discriminator +
      " tarafından yürütüldü."
  );
  message.channel
    .send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(" Oylama Sistemi")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter("Greedy Oylama Sistemi BETA", client.user.avatarURL())
        .addField('Sadece birini seçin ! ',`**${question}**`)
    )
    .then(function(message) {
      message.react("✅");
      message.react("❌");
    });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Oylama"],
  permLevel: 2
};
exports.help = {
  name: "oylama",
  description: "Oylama yapmanızı sağlar.",
  usage: "oylama <oylamaismi>"
};
