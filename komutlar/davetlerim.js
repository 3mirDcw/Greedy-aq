const Discord = require("discord.js");
const Database = require("../Helpers/Database");
// exports.onLoad = (client) => {};
/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
exports.run = async (client, message, args) => {
    const db = new Database("./Servers/" + message.guild.id, "Invites");
    var data = db.get(`invites.${message.member.id}`) || { total: 0, fake: 0, inviter: null, regular: 0, bonus: 0, leave: 0 };//pythonic
    var embed = new Discord.MessageEmbed()
    .setDescription(` \n **Toplam:** \`${(data.total || 0) + (data.bonus || 0)}\`, **Gerçek** \`${data.regular || 0}\`, **Bonus:** \`${data.bonus || 0}\`, **Çıkanlar:** \`${data.leave || 0}\`, (**Sahte Davetler:** \`${data.fake || 0}\`)`)//pythonic
    .setColor("RANDOM");
    message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'davetlerim',
  description: 'Logo YaparsÄ±nÄ±z',
  usage: 'm-logo <yazÄ±>'
};
