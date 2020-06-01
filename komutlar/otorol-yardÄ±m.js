const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
  let yardım = new Discord.RichEmbed()
  .setAuthor(`${client.user.username} `,client.user.avatarURL)
  .addField('__**OTOROL ayarlamak**__', '**__c!oto-rol-ayarla__ 》 Otorolü Ayarlar.** \n Örnek: `c!otorolayarla @rolünüz #logkanalı` \n \n **c!oto-rol-msg 》 Otorol Mesajını Ayarlar** \n Örnek: `c!otorolmsg -server-, Sunucumuza Hoşgeldin, -uye-! -rol- Adlı Rolün Başarı İle Verildi Seninle Beraber, **-uyesayisi-** Kişiyiz.`')
  .addField('__**Kullanabileceğiniz Değişkenler**__',`
-uye- 》 Üyeyi Etiketler.
-rol- 》 Rolün İsmini Ekler.
-server- 》 Server İsmini Yazar.
-uyesayisi- 》 Üye Sayısını Atar.
-botsayisi- 》 Bot Sayısını Atar.
-kanalsayisi- 》 Kanal Sayısını Atar.
-bolge- 》 Sunucu Bölgesinin İsmini Atar.
`)
 .setColor('RANDOM') 
 message.channel.send(yardım)


//CodEming / Yasin..

  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'otorol',
  description: 'otorol', 
  usage: 'otorol'
};