const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
const db = require('quick.db');

var sahip = ayarlar.sahip;

exports.run = async (client, message, args) => {
if ( message.author.id != ayarlar.sahip ){
   message.channel.send("**Bu komutu kulanmaya yetkiniz yok!!**")
  }else{
  let nesne = args[0]
  if (!nesne) return message.channel.send('Kullanıcı beyazlisteye alınamadı.')
   
  db.delete(`kullanicikaraliste_${nesne}`)
   message.channel.send(" :tada: Completed. :thumbsup: `" + nesne + "` kullanıcısı veya sunucu artık botu kullanabilir..")
  }   
 };
                                        
  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["beyazliste"],
    permLevel: 3
}

exports.help = {
    name: 'whitelist',
    description: '',
    usage: 'whitelist'
}