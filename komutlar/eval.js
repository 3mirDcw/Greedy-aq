const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms');

exports.run = (client, message, args) => {
  const commonTags = require("common-tags");
  const util = require("util");
   let { MessageEmbed } = require("discord.js");
      const embda1 = new Discord.MessageEmbed() .setColor("#E1F5FE") .setDescription(`${client.hayir} You are not the bot founder.`)

  if (message.author.id !== "738367168961577020")
  if (message.author.id !== "682607343707488388")
 return message.channel.send(embda1)
    function cleanText(text) {
      if (typeof text === "string") {
        return text
          .replace(/`/g, "`" + String.fromCharCode(8203))
          .replace(/@/g, "@" + String.fromCharCode(8203));
      } else {
        return text;
      }
    }

    try {
      let executedIn = process.hrtime();
      let result = eval(args.join(" "));
      result = cleanText(result);
      result = util.inspect(result);
      executedIn = process.hrtime(executedIn);
      executedIn =
        executedIn[0] * Math.pow(10, 3) + executedIn[1] / Math.pow(10, 6);

      let embed = new MessageEmbed();
      embed.setDescription(commonTags.stripIndents`
      ${executedIn.toFixed(3)} milisaniyede çalıştırıldı
      \`\`\`xl
        ${result}\`\`\`
    `);
      embed.setColor(0x00ff00);
      message.channel.send({ embed });
    } catch (error) {
      let embed = new MessageEmbed();
      embed.setDescription(commonTags.stripIndents`
      Beklenmeyen bir hata oluştu
      \`\`\`xl
      ${cleanText(error)}\`\`\`
    `);
      embed.setColor(0xff0000);
      message.channel.send({ embed });
    }
  
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["Eval"],
  permLevel: 0 ,
  category: "OWNER"
};

exports.help = {
  name: 'eval',
  description: 'Used to test code.',
  usage: 'Used to test code.'
};