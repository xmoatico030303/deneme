const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:iptal:626445972620443648> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let isim = args.slice(0).join(' ');
  if(isim.length < 5) return message.channel.send('<a:iptal:626445972620443648> İsim Sistemi İçin En Az 5 Karakter Belirtebilirsin. Örnek: `!isim-sistemi [-uye-]|[-yas-]`')
  
 message.channel.send('<a:basarl:626445944258560012> Kayıt Olan Kullanıcıların İsimlerini '+isim+' Bu Şekle Göre Düzenleyeceğim.') 
 db.set(`isim_${message.guild.id}`, isim)  
//CodEming / Yasin..
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['isim-sistemi'], 
  permLevel: 0
};

exports.help = {
  name: 'isimsistemi',
  description: 'taslak', 
  usage: 'isimsistemi'
};