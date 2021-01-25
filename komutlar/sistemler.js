const Discord = require ("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Botumuz Maalesef Ă–zel Mesajlarda KullanÄ±lamaz**')
    return message.author.send(ozelmesajuyari); }
  
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("** Sistemler Menüsü **")
.setThumbnail("https://cdn.discordapp.com/attachments/793186057260367895/793424496404332564/yakyor.png")
.setDescription(`
> <a:onay:686199897367511040> !güvenlik - Güvenlik Sistemi

>   <:INFO:795920163433086997> Argümanları : ayarla,ayarla kanal,ayarla yazı,sıfırla,sıfırla kanal,sıfırla yazı

> <a:onay:686199897367511040> !hg-bb - Hoşgeldin-Görüşürüz Sistemi [BAKIMDA!]
> <a:onay:686199897367511040> !spotify-engel - Spotify Dinleme Linkleri Engeller 
>   <:INFO:795920163433086997> Argümanları: aç,kapat
`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["syst","sistemler","systems"], 
    permLevel: 0 
};

  exports.help = {
    name: 'sistemler'
};
