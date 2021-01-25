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
.setTitle("**  » Ekstra Menü   **")
.setThumbnail("https://cdn.discordapp.com/attachments/793186057260367895/793424496404332564/yakyor.png")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.ii/propit)** **-** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=793185279208849438&scope=bot&permissions=268443710)**

**• Komutlar**
> **!yılbaşı**  → Yeni Yıla Kaç Saat Kaldığını Gösterir
> **!** → 
> **!** → 
> **!** → 
> **!** → 

`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["Extra"], 
    permLevel: 0 
};

  exports.help = {
    name: 'extra'
};
