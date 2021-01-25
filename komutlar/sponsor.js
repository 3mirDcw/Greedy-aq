
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

.setColor(`GOLD`)
.setTitle("**  » Sponsor Menüsü   **")
.setThumbnail("https://cdn.discordapp.com/attachments/793186057260367895/793424496404332564/yakyor.png")
.setDescription(`
**• Sponsonlar**
> <a:gold:686208112252026981> **Rigbak Justice Gun 2 Demo** → Rigbak Adlı Oyun Yapım Şirketi. 
> <a:gold:686208112252026981> ** Silah Oyunumu Arıyorsun? O Zaman Oyunumuzu Indirsene ne duruyorsun  **
> <a:gold:686208112252026981> This is a demo version of the Adalet Namluda 2 for you to try before buying the full version.

After all the requests from first game, we updated the entire system by desired features and made an entire new game. Graphical and gameplay improvements are made and 90 new missions added to the game.

Adalet Namluda 2 includes:
- Real operation groun... **

> CodeMedia - Gelişmiş Hizmet
> BotList & Özel Kodlar
> Aktif Arkadaşlar 
> 7/24 Yetkililer
> Giriş Anahtarın https://discord.gg/5XNR6Ru4yu
`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["sponsor", "sp","spo"], 
    permLevel: 3 
};

  exports.help = {
    name: 'sponsor'
};