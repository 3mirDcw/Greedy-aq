const Discord = require("discord.js");
const Database = require("../Helpers/Database");


exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") && !message.member.hasPermission("MANAGE_GUILD")) return message.reply("Yetkin Yok!");//pythonic

    const db2 = new Database("./Servers/" + message.guild.id, "Invites");//pythonic

db2.set("invites")
message.channel.send("Propite Başarıyla Tüm Kullanıcıların Davetleri Sıfırla :white_check_mark:")//pythonic
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'davetleri-sıfırla',
  description: '',
  usage: ''
};

