const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

// if(!message.member.roles.cache.has('RolID') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu kodu kullanmak için yeterli yetkin yok!')

    let hesap = ["3131313131","3131313131","3131313131","3131313131","3131313131","Buldun Bunu Destek Sunucusuna ss alip ilet KEY : KE66"];
   let sonuç = Math.floor((Math.random() * hesap.length));

    message.channel.send(`İşte Premium Anahtarın: ${sonuç} \n NOT : BUURDAN SADECE 1 TANE GERCEK PREMIUM ANAHTAR CIKA BILIR!`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["random-pre"],
    permLevel: 0
   };
   
  exports.help = {
    name: 'random-premium',
    description: '',
    usage: ''
   }
