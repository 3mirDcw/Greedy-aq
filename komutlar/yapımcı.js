
const Discord = require ("discord.js");
exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Botumuz Maalesef Özel Mesajlarda Kullanılamaz**')
    return message.author.send(ozelmesajuyari); }
let anarenk = client.anarenk;
  
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor(`${anarenk}`)
.setTitle("**  » Yapımcılarımın Menüsü   **")
.setThumbnail("https://cdn.discordapp.com/attachments/793186057260367895/793424496404332564/yakyor.png")
.setDescription(`
**• Komutlar**
> **!ping** → Pinge Bakarsın Kaptan
> **!karaliste** → Kullanıcıyı Karalisteye Alırsın
> **!botçık** → Botu Sunucudan Çıkarırsın
> **!y** → Botu Yeniden Başlatır
`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["Yapımcı", "Lider","lider"], 
    permLevel: 3 
};

  exports.help = {
    name: 'yapımcı'
};