const Discord = require('discord.js');


exports.run = async(client, message) => {
let ulke = ["Turkiye"];
  client.on('message', msg => {
  if (message.content === 'kur') {
    message.reply('Öhm ! Premium Kodunuzu Bulamadım Ondan Işlemler Yapılamaz!');
  }
  });
  let cerez = client.cerezler.cerez;
let me = 12;
let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`
**__Greedy__ Panel Sistemi**

> Bu Panel sistemi nedir? Kurucular Size kod verecektir bu kodlarla sunucuya custom panel kura bilirsiniz!
> Peki Custom Panel nedir? Sunucuya özel Sesli Kanallarda Davet Logları ve Premium Aktifmi deyilmi logları v.b 
> Amma kod nasıl alacam?? Bot Kurucuları Discord Sunucumuzda Etkinlikler ve Çekilişler Yaparak Kazanan Kişilere Bu Kodları Verirler!
> Paneli Nasıl Kurcam?? Paneli Kurmak İçin Aşağıdakı Komutları Kullana Bilirsin !
** 
[!panel kur] - Paneli Kurmanıza Yarar
[!panel-sil] - Paneli Siler
[!panel-güncelle] - Bot Sunucudan Atılın yeniden eklendiğinde Panelde bug yaşanmasının karşısını almak içindir
[!panel-isim] - Panelin Ismini Değişir

 Bot Çerezleri : ${cerez}
**
NOT: Kurmak İçin Premium Olmanız Lazım Premium Şuanlık Yoktur O Yüzden Hemen Kurun Derim Veya !panel-kur <kod> Şeklinde Kurabilirsiniz**`);

message.channel.send(embed)

}
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['panell', 'panelp'],
permLevel: 0
};

exports.help = {
name: 'panel',
description: 'Botun pingini gösterir',
usage: 'ping' 
};
