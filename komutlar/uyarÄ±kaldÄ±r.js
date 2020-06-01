const Discord = require("discord.js");
const db = require('quick.db');
const neblm = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
if (!args[0]) return message.channel.send('Kimin uyarısını sileceğimi yazmalısın.')
let user = message.mentions.users.first() || client.users.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user
  if (!user) return message.channel.send('Kullanıcıyı bulamadım.')
  let member = message.guild.member(user)
  if (!member) return message.channel.send('Kullanıcıyı **bulamadım.**')
  
  let i = await db.get(`uyarı.${user.id+message.guild.id}`)
  if (!i || i == 0) return message.channel.send('Bu kullanıcının zaten bir uyarısı yok ki,nasıl sileyim ?')
  
  await db.add(`uyarı.${user.id+message.guild.id}`, -1)
  message.channel.send('Bu kullanıcının uyarısı silindi!')
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['uyarı-silll'],
    permLevel: 3
};
  
  exports.help = {
    name: 'uyarı-kaldır',
    description: '',
    usage: ''
};