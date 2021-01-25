const Discord = require("discord.js");
exports.run = (client, message, args) => {

  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.channel.send("Command Run Perm is **MESSAGE_CONTROL** .");
  let mesajid = args[0];
  let tepki = args[1];
  const emojiadi = args.slice(1).join(" ");
  const emoji = message.guild.emojis.cache.find(a => a.name == emojiadi);
  if (!args[0]) return message.channel.send("Write Message ID.");
  if (!args[1]) return message.channel.send("Write Emoji Name!.");
  message.channel.messages.fetch({ around: mesajid, limit: 1 }).then(msg => {
    const mesaj = msg.first();
    mesaj.react(`${emoji.id}`).then(message.channel.send(`Reaction added.`))
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rcadd", "nitro"],
  permLevel: 0
};
exports.help = {
  name: "reaction",
  description: "Mesaja tepki ekler",
  usage: "tepki <mesaj id> <emoji ismi>"
};