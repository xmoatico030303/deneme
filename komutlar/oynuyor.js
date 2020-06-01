const Discord = require('discord.js')
  const db = require('quick.db');
//Y♾S-Yasin TARAFINDAN YAPILMIŞTIR! PAYLAŞILMASI KESİNLİKLE YASAKTIR!
exports.run = async (client, message, args) => {

  if(message.author.id !== "434038528629014539") return message.channel.send('**Bu komutu sadece "Sahibim" kullanabilir!**')
  
  
  let yazı = args.join(" ");
         let hata = new Discord.RichEmbed()
             .setTitle('**Hata!** \n **Oynuyor Kısmında** Yazılacak Cümleyi/kelimeyi yazmalısın!')
           .setColor('RED')  

  
  
  if (yazı.length < 1) return message.channel.sendEmbed(hata)
           let tamam = new Discord.RichEmbed()
           .setTitle('**Başarılı!** <a:yess:602116858879148032> \n Bot **Oynuyor Kısmı** __' + yazı + '__ Olarak Değiştirildi!')
           .setColor('GREEN')  
message.channel.sendEmbed(tamam)
           db.set(`oynuyor_`, yazı) 
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oynuyor',
  description: 'taslak',
  usage: 'oynuyor'
};