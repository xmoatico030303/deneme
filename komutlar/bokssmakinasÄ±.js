const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
 var cevaplar = ['Boks Makinesi Sonucu : **Casper yine formunda :D=99999999999** !', 
                 
                ];
 var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
 const ping = new Discord.RichEmbed()
 .setColor(2828)
 .setDescription("🥊 " + cevap)
 return  message.channel.sendEmbed(ping)
};

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['bokssmakinesi'],
   permLevel: 4
 };

 exports.help = {
   name: 'bokssmakinesi',
   description: 'Boks makinesine vurur.',
   usage: 'boks-makinesi'
}