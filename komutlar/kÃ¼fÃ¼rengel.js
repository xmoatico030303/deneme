const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`)
  if (!args[0]) return message.channel.send(`Küfür engelleme fitresini ne yapacağım? Aç ya da kapat yaz. \`${prefix}küfür-engel <aç/kapat>\``)
  
  if (args[0] == 'aç') {
    db.set(`kufur_${message.guild.id}`, 'acik')
      message.channel.send('Küfür engelleme filtresi başarıyla açıldı.')
  };
  if (args[0] == 'kapat') {
    db.set(`kufur_${message.guild.id}`, 'kapali')     
    message.channel.send('Küfür engelleme filtresi başarıyla kapatıldı.')
  };

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['küfür'],
  permLevel: 0
};

exports.help = {
  name: 'küfür-engelleme',
  description: 'Küfür engelleme sistemini açarsınız/kapatırsınız.',
  usage: 'küfür-engelleme'
};