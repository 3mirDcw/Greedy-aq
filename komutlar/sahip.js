const Discord = require ("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Botumuz Maalesef Özel Mesajlarda Kullanılamaz**')
    return message.author.send(ozelmesajuyari); }
  
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("** >> Greedy Sahipleri   **")
.setThumbnail("https://cdn.discordapp.com/attachments/793186057260367895/793424496404332564/yakyor.png")
.setDescription(`
Yap�0�3mc�0�3lar: <@782860084707328051> Ve <@738367168961577020>
**> ileti�0�6im**
**[[�9�2]Discord](https://discord.io/greedy)**

`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["Sahip","Yapımcı","yapımcı"], 
    permLevel: 0 
};

  exports.help = {
    name: 'sahip'
};