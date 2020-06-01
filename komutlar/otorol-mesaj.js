const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:warning: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send(':warning: Otorol Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin. Örnek: `!oto-rol-msg -uye- Hoşgeldin! senle beraber -uyesayisi- Kişiyiz!`')
  
 message.channel.send(' :white_check_mark: Oto-Rol mesajını `'+mesaj+'` Olarak ayarladım.') 
 db.set(`otomesaj_${message.guild.id}`, mesaj)  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['oto-rol-msg','otorolmsg'], 
  permLevel: 0
};

exports.help = {
  name: 'oto-rol-msg',
  description: 'taslak', 
  usage: 'oto-rol-msg'
};