const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
   let mesaj = args.slice(0).join(' ');
     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:iptal:626445972620443648> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`); 
  if(mesaj.length < 5) return message.channel.send('<a:iptal:626445972620443648> Giriş Sistemi İçin En Az 5 Karakter Belirtebilirsin. Örnek: `c!giriş-sistemi Hoşgeldin -uye- Bu Kayıt Olmak İçin !kayıt İsim Yaş`') 

  message.channel.send('<a:basarl:626445944258560012> Sunucuya Yeni Üye Katılınca `'+mesaj+'` Karşılama Mesajı Atacağım.')
  
  db.set(`mesaj_${message.guild.id}`, mesaj)  

//CodEming /Yasin..
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['girişsistemi'], 
  permLevel: 0
};

exports.help = {
  name: 'giriş-sistemi',
  description: 'taslak', 
  usage: 'giriş-sistemi'
};