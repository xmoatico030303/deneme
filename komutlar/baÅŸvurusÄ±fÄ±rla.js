const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, message, args) => {
//if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(" Bu komutu kullanabilmek için **yeterli izne sahip değilsin!**")
  await db.delete(`support_${message.guild.id}`)
  return message.channel.send("Başvuru kanalı başarıyla **sıfırlandı!**")
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 4
};

exports.help = {
  name: 'başvuru-kanal-sıfırla', 
  description: '', 
  usage: '' 
};
