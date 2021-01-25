const Discord = require ("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Botumuz Maalesef 脰zel Mesajlarda Kullan谋lamaz**')
    return message.author.send(ozelmesajuyari); }
  
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("** >> Greedy Sahipleri   **")
.setThumbnail("https://cdn.discordapp.com/attachments/793186057260367895/793424496404332564/yakyor.png")
.setDescription(`
Yapımcılar: <@782860084707328051> Ve <@738367168961577020>
**> iletişim**
**[[🔴]Discord](https://discord.io/greedy)**

`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["Sahip","Yap谋mc谋","yap谋mc谋"], 
    permLevel: 0 
};

  exports.help = {
    name: 'sahip'
};