const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
    let kanal = message.mentions.channels.first()
 let kontrol = db.fetch(`kanal_${message.guild.id}`)
  
  if(kontrol) {
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:warning: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if(!kanal) return message.channel.send(':warning: Bu Özelliği Ayarlamam İçin Bir Kanal Etiketlemelisin Örnek: `c!kayit-kanal-ayarla #kayitkanal`')
  
  message.channel.send(' :white_check_mark: Sunucunuzda, `'+kontrol+'` Olan kayıt kanalını,'+kanal+' Olarak Ayarladım.')
db.set(`kanal_${message.guild.id}`, kanal.id)   
  return
  }
  
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:warning: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if(!kanal) return message.channel.send(':warning: Bu Özelliği Ayarlamam İçin Bir Kanal Etiketlemelisin Örnek: `c!kayit-kanal-ayarla #kayitkanal`')
  
  message.channel.send(' :white_check_mark: Kayıt Kanalını '+kanal+' Olarak Ayarladım.')
db.set(`kanal_${message.guild.id}`, kanal.id)  
 
//CodEming.. / Yasin

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['kayit-kanal-ayarla'], 
  permLevel: 0
};

exports.help = {
  name: 'kayıt-kanal',
  description: 'taslak', 
  usage: 'kayit-kanal-ayarla'
};