const Discord = require('discord.js')
exports.run = async (client, message, args, level) => {
// message.delete(3000)
  try {
    let bk = ["Bulunamadı!"]
    const embed = new Discord.MessageEmbed()
    .setTitle(`Greedy - Komut Sayısı `)
    //.addField(`Bot Bakımdamı ?` , "hayır")
    .setDescription('**\nToplam**  **' + client.commands.size + '** **Komut Vardır!** \nBotda Bakımda Olan Komut Sayısı :', `${bk}`)
    .setColor("RANDOM")
    .setImage('https://www.thisiscolossal.com/wp-content/uploads/2018/04/agif2opt.gif')
    .setTimestamp()
    .setFooter(message.author.username , message.author.avatarURL())

    return message.channel.send({embed});
    
    message.channel.send();
  } catch (err) {
    message.channel.send('Daha Sonra Tekrar Deneyin!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'komutlar',
  description: 'Bottaki Komut Sayısını Gösterir.',
  usage: 'komut-sayısı'
};