const Discord = require('discord.js');
const ayarlar = require('moment');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setDescription(`**hz!dm-gönder** = Bot Tarafından Birine Mesaj Atar.\n **hz!herkese-rol-ver** = Rol Etiketleyerek Herkese Rol Ver.\n **hz!herkesten-rol-al** = Rol Etiketleyerek Herkesten Rol Al.\n **hz!kick** = Birini Sunucudan Atmaya İşe Yarar.\n **hz!mute** = Birini Susturmaya İşe Yarar.\n **hz!otorol-ayarla** = Sunucuda Otorol Ayarlar.\n **hz!otorol-kapat** = Ayarlanmış Otorol Kapatır.\n **hz!oylama** = Sunucuda Oylama Yapmaya İşe Yarar.\n **hz!sayaç-ayarla** = Sunucunun Sayaçını Ayarlar.\n **hz!temizle** = Sohbeti Temizlemeye İşe Yarar.\n **hz!unmute** = Susturulmuş Birinin Mutesini Kaldırır.\n **hz!uyar** = Birine Uyarmaya İşe Yarar.\n **hz!yavaşmod** = Chatde Konuşma Sınırı Koyar (süre).\n **hz!çekiliş-yap** = Sunucuda Çekiliş Yapmaya İşe Yarar.`)
  .setColor(0x00ffff)
 message.channel.send(embedyardim);
}
  
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Yetkili Komutları Gösterir.',
  usage: 'yetkili'
};