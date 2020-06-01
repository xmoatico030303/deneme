const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

 exports.run = async(client, message, args) => {
   let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
     if(message.author.id !== ayarlar.sahip) return message.channel.send('Bu komutu sadece sahibim kullanabilir.')
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`:x:yazı yazman gerek :x:`)).then(m => m.delete(5000));
   
   let selam = new Discord.RichEmbed()

       .setColor("RANDOM")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter(client.user.username, client.user.avatarURL)
       .setDescription(`Cevabınızı ve fikirlerinizi  **${prefix}tavsiye <mesajınız>** şeklinde iletirseniz çok sevinirim.`)
       .addField(`**Bot Oylama**`, `**${question}**`);
   
   client.guilds.filter(x => x.id !== "264445053596991498").forEach(x => {
  try {
  x.systemChannel.send(selam)
  } catch(e) {

  }
})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: '',
  description: 'Botun sunucularının default kanallarında oylama yapmanızı sağlar.',
  usage: 'sahipoylama <oylamaismi>',
  kategori: 'sahipkomutları'
};