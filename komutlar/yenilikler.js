
const Discord = require ("discord.js");

exports.run = (client, message) => {
//  let yenilik1 = ["TARÄ°H 29/12/2020 \n  Bot YapÄ±mÄ±na BaÅŸlandÄ± \n "];
  //let yenilik2 = ["TARÄ°H 29/12/2020 \n  Bota Komutlar Eklenmeye BaÅŸlandÄ± \n "];
 // let yenilik3 = ["TARIH 31/12/2020 \n  Bota DashBoard YapÄ±lmaya BaÅŸlandÄ± \n"]
 // let yenilik4 = ["TARIH 1 Ocak 2021 \n Bota Davet Sistemi __Beta__ Olarak Eklendi! \n"];
  //let yenilik5 = ["TARÄ°H 1/1/2021 \n Bota Dashboard Fikri KapandÄ± "]
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Botumuz Maalesef Ã–zel Mesajlarda KullanÄ±lamaz**')
    return message.author.send(ozelmesajuyari); }
  
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  > Yenilikler Menüsü  **")
.setThumbnail("https://cdn.discordapp.com/attachments/793186057260367895/793424496404332564/yakyor.png")
.setDescription(`
> **Greedy yenilikler
[<a:hahi:799363706953793567>] Yenilikler Burda

> <a:hahi:799363706953793567> Yenilikler 

1. <a:hahi:799363706953793567> Altyapı Güncellendi ! 
2. <a:hahi:799363706953793567> Davet Sistemi __BETA__ Olarak Eklendi!
3. <a:hahi:799363706953793567> Ayarlana Bilir Sistemler Eklendi,Yardim Menüsü Değiştirildi,Buglar Fixlendi,Güvwnlik Sistemi Bugu fixlendi !
**`)

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["Yenilikler", "Uptades","uptades"], 
    permLevel: 0 
};

  exports.help = {
    name: 'yenilikler'
};
