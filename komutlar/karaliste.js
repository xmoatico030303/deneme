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
  if (!nesne) return message.channel.send('Kullanıcı karalisteye alınamadı.')
   
  db.set(`kullanicikaraliste_${nesne}`, 'aktif')
    const engel = new Discord.RichEmbed()
    .setTitle("Kara Liste | XiR")
    .setColor("GREEN")
    .setDescription(":ballot_box_with_check: Kara Liste Activated. `" + nesne + "` kullanıcısı veya sunucusu artık botu kullanamayacak.")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setThumbnail(message.author.avatarURL)
    .addField("Kara Listeye Alınan ID: ", nesne)
   message.channel.send(engel)
  }   
 };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["karaliste"],
  permLevel: 4
};

exports.help = {
  name: 'karaliste',
  description: '',
  usage: 'karaliste'
};
