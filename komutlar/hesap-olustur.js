const Discord = require("discord.js");
const db = require("quick.db");

///HAZIRLAYANLAR Clearly_ , FORCEX

exports.run =  async (client, message, args) =>  { 
  ///HAZIRLAYANLAR Clearly_ , FORCEX
  
const  hesap =  await db.fetch(`hesap-${message.guild.id}`)
  const hesapdurumu = await db.fetch(`hesapdurum-${message.guild.id}`)
  const hesapisim = await db.fetch(`hesapisim_${message.guild.id}`);
  let kontrol = await db.fetch(`hesapisim_${message.author.id}`);

  
  if (kontrol) return message.channel.send('HATA ! Zaten Bir Hesapın Var!') 

let isim = args.slice(0).join(' ')

  if(!isim) return message.channel.send("HATA ! Lütfen Bir Isim Gir !")

db.set(`hesap-${message.author.id}`,"Hesap Açıldı")
  db.set(`hesapisim_${message.author.id}`,isim)
  db.add(`para_${message.author.id}`, 20)
  if(!hesap) return message.channel.send("Başarılı Hesap Oluşturdun Sana Hesap Actıgından Dolayı 20Coin Hediye Etdim") //sdsaassda
  
}///HAZIRLAYANLAR Clearly_ , FORCEX OgnSert
exports.conf = {
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "hesap-oluştur"
};
