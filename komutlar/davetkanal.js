const Discord = require("discord.js");
const Database = require("../Helpers/Database");
// exports.onLoad = (client) => {};
/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
exports.run = async (client, message, args) => {
	  const db = new Database("./Servers/" + message.guild.id, "Settings");//pythonic
    if(!message.member.hasPermission("ADMINISTRATOR") && !message.member.hasPermission("MANAGE_GUILD")) return message.reply("**Yetkiniz Bulunmadığından Bu Komudu Kullanamazsınız**")//pythonic
        let kanal = message.mentions.channels.first()//pythonic
    if(kanal){
    var type = ["Channel"];
    db.set(`settings.${type}`, kanal.id);

    message.reply(`**İşlemler Başarıyla Yapıldı**`);


}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet-kanal',
  description: 'Bot adminlerinin bot Ã¼zerinde kod test etmesini saÄŸlar.',
  usage: 'eval <kod>'
};