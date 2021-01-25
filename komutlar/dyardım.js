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
.setTitle("**  » Davet Sistemi Menüsü __BETA!__  **")
.setThumbnail("https://cdn.discordapp.com/attachments/793186057260367895/793424496404332564/yakyor.png")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.io/greedy)** **-** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=767480466957402173&scope=bot&permissions=268443710)**

**• Komutlar**
> **!davetlerim** → Etiketlediğin Üyenin davetlerini Gösterir
> **!davetleri-sıfırla** → Herkesin Davetlerini Sıfırlar
> **!davet-kanal-sıfırla** → Davet Kontrol Kanalını Sıfırlar
> **!davet-kanal** → Belirtiğiniz Kanalı Davet Logu kanalı Olarak Ayarlar
> **!bonus-ekle** → Belirttiğiniz Kişiye Bonus Davet Ekler
> **!top** → En Çok Daveti Olanları Listeler
> **!rütbe-ekle** → Belirttiğiniz Rolü Belirttiğiniz Davette Verir
> **!rütbeler** → Davet Rollerini Listeler
> **!rütbe-sıfırla** → Ayarladığınız Rütbeleri Gösterir

> **NOT : Bu Sistem __BETA__ Aşamasında Sıkıntılar Olunca Discord Sunucumuza Bildiriniz! **
`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["Dyardım"], 
    permLevel: 0 
};

  exports.help = {
    name: 'dyardım'
};
