
const Discord = require('discord.js');
const veri = require('diskdb');
const ayarlar = require('../ayarlar.json');

veri.connect('Ekonomi',['veri']);
var article = {
    kullanici : "isim",
    coin : "0",
    günlük : "random"
}
//veri.articles.save(article);
//veri.articles.find();
const db = require('quick.db');

const ms = require('ms')

exports.run = async (client, message, args) => {
  
 var espriler = ['100','50','25','2000','2500','50','750'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];

  let yavaşmod = 8.64e+7, // 24 Saat

        amount = Math.floor(Math.random() * 1000) + 4000;      


    let lastDaily = await db.fetch(`günlükbea_${message.guild.id}`);

    if (lastDaily !== null && yavaşmod - (Date.now() - lastDaily) > 0) {

        let timeObj = ms(yavaşmod - (Date.now() - lastDaily));





      return message.reply(`HATA ! 24 Saate Bir Günlük Ödülünü Alabilirsin`)

      

    } else {

      db.add(`para_${message.author.id}`, espri)
message.channel.send(`${espri} Kadar Para Aldın!`);
}
       db.set(`günlükbea_${message.guild.id}`, Date.now());

    }




exports.conf = {
  aliases: ['günlük-ödül'],
  permLevel: 0
};

exports.help = {
  name: 'günlük'
};

