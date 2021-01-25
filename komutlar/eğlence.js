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
.setTitle("**  » Greedy Eğlence Menüsü   **")
.setThumbnail("https://cdn.discordapp.com/attachments/793186057260367895/793424496404332564/yakyor.png")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.io/greedy)** **-** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=767480466957402173&scope=bot&permissions=268443710)**
**• Komutlar**
> **!adamasmaca**  → Adam Asmaca Oynarsınız
> **!token** → Botun Tokenini Alıp Patlatırsınız
> **!espri** → Size Rastgele Espiri Yapar
> **!aşkölçer** → Etiketleğiniz Kişiyle Aşkınızı Ölçer
> **!slots** → Slots Oyununu Oynarsınız  
> **!fbi** → Fbi Gifi Atar
> **!tersyazı** → Yazdığınız Yazıyı Tersden Yazar 
> **!ambulans** → Ambulans Sizi Kurtarmaya Gelir
`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["Eğlence","eglence","Eglence"], 
    permLevel: 0 
};

  exports.help = {
    name: 'eğlence'
};
