const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
    client.user.setStatus('STREAMING') 
  client.user.setActivity(`📚 !yardım | 🔒 Sürüm : 1.2 |  ${client.guilds.cache.size} Sunucu`);
 //    client.user.setActivity(`:triangular_flag_on_post: Greedy ^ | :arrows_counterclockwise: Sürüm : 1.2 | :arrow_up: Sunucu : ${client.guilds.cache.size}`);
    /*
var oyun = [
       
        "[🎖] Sizlerle Birlikte",
        "[📋] !yardım & !yenilikler",
        "[🎉] Greedy Dbl Onaylı g!oyver",
        "[❄] Yeni Yıl Ateşinde",
        "[🔒] Greedy Beta 1.2 ",
        "[🎁] Yeni Yılınız Kutlu olsun!",
        "[🛢] Greedy Veritabanı Artık Güncel! ",
        "[🇹🇷] Greedy Artık Türkçe !"
  
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "." );
        }, 2 * 2500);*/
    let komutlar = client.commands.size;
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar y眉klendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giri艧 yap谋ld谋!`);
 /* client.user.setStatus("dnd");
  client.user.setActivity(`Bot Yenilendi ${komutlar} kadar komut var`);*/
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarland谋!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: 艦u an ` + client.channels.cache.size + ` adet kanala, ` + client.guilds.cache.size + ` adet sunucuya ve ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullan谋c谋ya hizmet veriliyor!`);
};
//knk site bitti domain al谋c
