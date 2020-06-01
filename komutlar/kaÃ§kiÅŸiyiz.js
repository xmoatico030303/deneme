const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const moment = require('moment');

exports.run = async (client, message, params) => {  
  
  const kaçkişiyiz = new Discord.RichEmbed()
  .setAuthor(`GitHub`, message.guild.iconURL)
  .setColor("333333")
  .addField(`|> Bilgiler Hesaplandı !!`,`|> Şuanda ${message.guild.memberCount} Kullanıcı bulunuyor.`, true)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(kaçkişiyiz);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kaçkişiyiz',
  description: 'Sunucunun bilgilerini gönderir.',
  usage: 'kaçkişiyiz'
};