const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, params, args) => {
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':no_entry: Hoşgeldin kanalı ayarlamak için `SUNUCUYU YONEt` yetkisine sahip olman gerek.')
  let hgkanali = message.mentions.channels.first();
  if (!hgkanali) return message.channel.send(':no_entry: Hoşgeldin kanalı ayarlamak için bir kanal etiketlemeniz gerekli. `/gkanal #kanal`')
    db.set(`gcc_${message.guild.id}`, message.mentions.channels.first().id)
  let i = await db.fetch(`gcc_${message.guild.id}`)
  message.channel.send(`${process.env.basarili} Hoşgeldin kanalı, <#${i}> olarak ayarlandı.`)    
        
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['gkanal'],
 permLevel: 0
};

exports.help = {
 name: 'gkanal',
 description: 'neblm',
 usage: 'gkanal'
};