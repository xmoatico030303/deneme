const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Snax Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField("<a:f1:637967475530530816>| Otorol Ayarlamak İçin s!oto-rol-ayarla @rol #kanal ", "Bu Kod Normal Kullanıcılar İçindir")
.addField("<a:f1:637967475530530816>| Gold Üye |<a:f1:637967475530530816> ", "Gold Üye Size Ne Gibi Katkılar Sağlar \n Otorol Mesaj Degiştire Bilirsin")
.addField("<a:f1:637967475530530816>| !oto-rol-msg 》 Otorol Mesajını Ayarlar Gold Üye İçindir. |<a:f1:637967475530530816> ", "Örnek: `s!oto-rol-msg -server-, Sunucumuza Hoşgeldin, -uye-! -rol- Adlı Rolün Başarı İle Verildi Seninle Beraber, **-uyesayisi-** Kişiyiz.`")
.addField("<a:f1:637967475530530816>| Gold Üye |<a:f1:637967475530530816> ", "Gold Üyeler Otorol Mesaj Ekleye Bilece Kod")
.addField("<a:f1:637967475530530816>| Gold Üye |<a:f1:637967475530530816> ", "**-uye- Katılan Kullanıcı İsmi \n -rol- Verilecek Rol İsmi \n -server- Sunucu İsmi \n -uyesayisi- Sunucudaki Üye Sayısı Toplam \n -botsayisi- Sunucudaki Toplam Bot Sayısı \n -bolge- Sunucun Bolgesi \n -kanalsayisi- Sunucudaki Toplam Kanal Sayısı**")
          

return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'otorol',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};