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
.setTitle("**  » Yetkili Menüsü   **")
.setThumbnail("https://cdn.discordapp.com/attachments/793186057260367895/793424496404332564/yakyor.png")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.io/greedy)** **-** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=648572592118169647&scope=bot&permissions=268443710)**

**• Komutlar**
> **!ban**  → Belirttiğiniz Üyeyi Banlar
> **!kick** → Belirttiğiniz Üyeyi Atar
> **!duyuru** → Duyuru Yapmanızı Sağlar
> **!oylama** → Oylama Yapmanızı Sağlar


`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["Yetkili"], 
    permLevel: 0 
};

  exports.help = {
    name: 'yetkili'
};
