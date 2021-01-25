const Discord = require ("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Botumuz Maalesef Özel Mesajlarda Kullanılamaz**', `UYARI`)
    return message.author.send(ozelmesajuyari); }
  /*
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » Greedy Yardım Menüsü   **")
.setThumbnail("https://cdn.discordapp.com/attachments/793186057260367895/793424496404332564/yakyor.png")
.setDescription(`
**» Bağlantılar** 
** [Sponsor](https://play.google.com/store/apps/details?id=com.rigbak.adnam2demo)** **-**
**[Destek Sunucusu](https://discord.io/greedy)** **-** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=767480466957402173&scope=bot&permissions=268443710)** |  **!yenilikler** Yazmayı Unutmayın :)
**[En Iyi Bot List Için Tıkla!](https://discord.gg/DVnkCcAMm2)**
**Aktif Komutlar <:onaypit:794219157796945970>  **
**Bakımda olan Komutlar <:bostapit:793431817574547476>**
**__Daima Hizmetinizde__**

• <a:emoji_4:794319228554444850> Duyurular • 
>  **__ Bot Yeni Altyapıya Güncellendi __**

**• Komutlar**
> <:onaypit:794219157796945970> [**!moderasyon**](https://discord.gg/4aN7bMNbdT) → Moderasyon Komutları 
> <:onaypit:794219157796945970> [**!kullanıcı**](https://discord.gg/4aN7bMNbdT) → Kullanıcı Komutları
> <:onaypit:794219157796945970>  [**!eğlence**](https://discord.gg/4aN7bMNbdT) → Eğlence komutları
> <:onaypit:794219157796945970>  [**!extra**](https://discord.gg/4aN7bMNbdT) → Extra Komutlar
> <:onaypit:794219157796945970>  [**!yetkili**](https://discord.gg/4aN7bMNbdT) → Yetkili Komutları
> <:onaypit:794219157796945970>  [**!genel**](https://discord.gg/4aN7bMNbdT) → Bot Komutları
> <:onaypit:794219157796945970> [**!dyardım**](https://discord.gg/4aN7bMNbdT) → Davet Sistemi __BETA!__
> :crown: [**!yapımcı**](https://discord.gg/4aN7bMNbdT) → Yapımcı Menüsü
> <:bostapit:794219058539003915> [**!müzik**](https://discord.gg/4aN7bMNbdT) → Müzik Komutları 
> <:onaypit:794219157796945970> [**!panel**](https://discord.gg/4aN7bMNbdT) → Gelişmiş Panel Sistemi **__KAPALIBETA__**-da
**• Bilgilendirme**
> [**__Davet Et__**](https://discord.com/oauth2/authorize?client_id=767480466957402173&scope=bot&permissions=268443710)
> [**__Destek Sunucusu__**](https://discord.io/greedy)

**• Duyurular**
> Davet Sistemi __BETA__ Olarak Eklendi!
`)
.setImage("https://cdn.discordapp.com/attachments/793876414364647497/793879424331808778/standard.gif%22")

return message.channel.send(EmbedCrewCode)
.then; 
*/
const embed = new Discord.MessageEmbed  ()
.setColor("GOLD")
.setTitle('Greedy Yardım Menüsü ')
.setDescription(`
 >    <a:hahi:799363706953793567> Greedy 1.1 Güncellemesi
 >     <a:hahi:799363706953793567> Duyurular
 >   <a:hahi:799363706953793567> Değişikler Oldu Ve Veriler Sıfırlandı Daha Fazla Bilgi Için !yenilikler 

       **<a:carkl:682484412499099652> Komutlar <a:carkl:682484412499099652>**

<a:carkl:682484412499099652> !moderasyon / Moderasyon Komutları

<a:uye:681927820380864604> !eğlence / Eğlence Komutları

<a:hrkdev:690288449093238884> !kullanıcı / Kullanıcı Komutları

<a:seviyet:776699095623925781> !sistemler / Ayarlanabilir Sistemler Menüsü

<a:dunya:776699207406583848> !dyardım / Davet Sistemi Komutları 

<a:hahi:799363706953793567> !panel-sistemi / Panel Sistemi Komutları [Premium] 

>  **<:sponsor:686211474351194159> Sponsorlar <:sponsor:686211474351194159>**
> <:sponsor:686211474351194159> Rigbak Games Ve CodeMedia <:sponsor:686211474351194159>

>     **<a:devp:776699041933295627> Bot Linkleri <a:devp:776699041933295627>**
> <a:devp:776699041933295627> Botu Davet Et [Tıkla!](https://discord.com/oauth2/authorize?client_id=767480466957402173&scope=bot&permissions=268443710)
> <a:devp:776699041933295627> Bota Oy Ver [Tıkla!](https://top.gg/bots/767480466957402173/)
> <a:devp:776699041933295627> Bot Website [Tıkla!](https://greedybot.tk)
> <a:devp:776699041933295627> Bot API Servisi Bilgileri [Tıkla!](https://sistemapileri.statuspage.io/)




`)

message.channel.send(embed);

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["yardim","Yardım","Yardim"], 
    permLevel: 0 
};

  exports.help = {
    name: 'yardım'
};
