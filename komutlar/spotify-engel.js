const Discord = require("discord.js");
const db = require("quick.db")
const guild = new db.table("ayarlamali")
exports.run = async (client, message, args, language, logchannel, findlogch) => {


  if(!args[0]) return message.reply('<a:xiyarhata:688721793267138659> Lütfen Bir Argüman Giriniz. Girebileceğiniz Argümanlar: **__aç ve kapat__**')
  if(args[0] !== "aç" && args[0] !== "kapat") return message.reply('<a:xiyarhata:688721793267138659> Lütfen Geçerli Bir Argüman Girin. Girebileceğiniz Argümanlar: **__aç ve kapat__**')
  let fetchlespblock = guild.fetch(`spotifyblock.${message.guiild.id}`)
  
  if(args[0] == "aç") {
    
  if(fetchlespblock == "ack") {
    
    return message.reply('<a:alarm:686200595194839101> Zaten açık olan birşeyi birdaha açamazsınız.')
  } else {
    
  message.reply("<a:tik:681901940925267986> Spotify Engeli Bu Sunucu Için Başarıyla Açıldı.")
  guild.set(`spotifyblock.${message.guild.id}`, "ack")
    
  } 
    
  }
  if(args[0] == "kapat") {
    
  if(fetchlespblock == "kpl") {
    
 return message.reply('<a:alarm:686200595194839101> Zaten kapalı olan birşeyi birdaha kapatamazsınız.')
    
  } else {
    
   message.reply("<a:tik:681901940925267986> Spotify Engeli bu sunucu için başarıyla kapatıldı.")
   guild.set(`spotifyblock.${message.guild.id}`, "kpl")
    
  }
    
  }
};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["spo-engel"], 
    permLevel: 0 
};

  exports.help = {
    name: 'spotify-engel'
};
