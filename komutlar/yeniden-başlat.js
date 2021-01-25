exports.run = async (client, message, args) => {
if(message.author.id !== "782860084707328051")
  if(message.author.id !== "738367168961577020") return message.channel.send({embed: {color: "BLACK", description: `Sahibim değilsin.` }})
message.channel.send({embed: {color: "BLACK", description: `Bot yeniden başlatılıyor...` }})
setTimeout(function(){
process.exit(1);
}, 2000);
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["y", "yeniden-başlat"],
permLevel: 0,
};
exports.help = {
name: 'yenidenBaşlat',
description: 'Yeniden başlatır.',
usage: 'y'
};
