const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Snax Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField("| s!ban : Kullanım : s!ban","kimi banlayacagım ")
.addField("| s!kick : Kullanım : s!kick","atacagın ")
.addField("| s!capslock-engel : Kullanımı s!capslock-engel Yazınca Aktif Oluyor Eğer Bir Daha Yazarsan Kapanır")
.addField("| s!slowmode : Kullanım : s!slowmode 3", "Slowmode açar")
.addField("| s!reklam-kick : Kullanım : s!reklam-kick aç", "Yazarsanız 3 Kere Reklam Yapanı Sunucu Atar")
.addField("| s!küfür-engelle : Kullanım : s!küfür-engelle aç", "Küfür engel açar")
.addField("| s!ayarlar : Kullanım : s!ayarlar","Sunucu Yaptınız Ayar Gosterir")
.addField("| s!prefix : Kullanım : s!prefix prefix", "Sunucu için prefix ayarlar")
.addField("| s!sayaç : Kullanım : s!sayaç sayı kanal", "Sayaç ayarlar")
.addField("| s!oy-kick : Kullanım : s!oy-kick @kullanıcı", "Oy yaparak kişiyi atar")
.addField("| s!oy-ban : Kullanım : s!oy-ban @kullanıcı", "Oy yaparak Kişiyi Banlar")

return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'yetkili',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};
   



