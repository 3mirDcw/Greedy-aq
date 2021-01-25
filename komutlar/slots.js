const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');
const slots = ['🍔', '🍊', '🍎', '🌶', '🍉','❄'];

exports.run = function(client, message) {

	var slot1 = slots[Math.floor(Math.random() * slots.length)];
	var slot2 = slots[Math.floor(Math.random() * slots.length)];
	var slot3 = slots[Math.floor(Math.random() * slots.length)];
	
	if (slot1 === slot2 && slot1 === slot3) {
		message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		Tebrikler, Kazandın 
		`); 
	} else {
		message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		Malesef, kaybettin!
		`);	
	}

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['d眉ello'],
  permLevel: 0
};

exports.help = {
  name: 'slots', 
  description: 'Slots oyunu oynat谋r',
  usage: 'slots'
};