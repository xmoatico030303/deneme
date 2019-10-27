const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Anka Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField("<a:vip:618164464688300042> | a+ban : Kullanım : a+ban","kimi banlayacagım <a:banned:614477727637962813>")
.addField("<a:vip:618164464688300042>| a+capslockengel : Kullanım : a+capslockengel aç", "Capslock engelini açar")
.addField("<a:vip:618164464688300042> |a+slowmode : Kullanım : a+slowmode 3", "Slowmode açar")
.addField("<a:vip:618164464688300042> | a+gsustur : Kullanım : a+gsustur <Kullanıcı> <Süre>", "Kişiyi geçici susturur")
.addField("<a:vip:618164464688300042> | a+gkanal : Kullanım : a+gkanal #kanal", "Resimli giriş çıkış ayarlar")
.addField("<a:vip:618164464688300042> | a+küfürengelle : Kullanım : a+küfürengelle aç", "Küfür engel açar")
.addField("<a:vip:618164464688300042> | a+modlog : Kullanım : a+modlog #kanal","Mod log ayarlar")
.addField("<a:vip:618164464688300042> | a+otorol : Kullanım : a+otorol @üye #kanal", "otorol ayarlar")
.addField("<a:vip:618164464688300042> | a+prefix : Kullanım : a+prefix prefix", "Sunucu için prefix ayarlar")
.addField("<a:vip:618164464688300042> | a+rolver :Kullanım :a+rolver <@kullanıcı> <@rol>", "Bir kişiye rol verir")
.addField("<a:vip:618164464688300042>| a+sayaç : Kullanım : a+sayaç sayı kanal", "Sayaç ayarlar")
  .addField("<a:vip:618164464688300042>| a+oy-kick : Kullanım : a+oy-kick @kullanıcı", "Oy yaparak kişiyi atar")

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
   