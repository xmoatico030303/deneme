const moment = require("moment")
const Discord = require("discord.js");
const dateFormat = require('dateformat');
const ms = require("ms");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  const filter = m => m.author.id === message.author.id;
  let bas = await db.fetch(`support_${message.guild.id}`)
  if (!message.guild.channels.get(bas)) return message.channel.send(' Başvuru kanalı ayarlanmamış!')   
  
  let iptal = new Discord.RichEmbed()
    .setColor('#FFB900')
    .setTitle('Komut Iptali')
    .setFooter(`Komut "${message.author.username}" tarafından iptal edildi.`, message.author.avatarURL)
    .setDescription('Komut iptal edildi.')
  
 await message.channel.sendEmbed(new Discord.RichEmbed()
  .setColor('#FFB900')
  .setTitle('Komut Girişi')
  .setDescription('Lütfen Gerçek Adınızı yazın. ``[ÖRN:Enes Sama]``')
  .setFooter('Komutu iptal etmek için "iptal" yazın. Otomatik olarak 30 saniye içinde iptal edilecektir.'))
  .then(async () => {
    message.channel.awaitMessages(filter, {
    max: 1,
    time: 30000
  }).then(async (collected) => {
  if (collected.first().content == 'iptal') return message.channel.send(iptal)
  let i = collected.first().content
  await message.channel.sendEmbed(new Discord.RichEmbed()
  .setColor('#FFB900')
  .setTitle('Komut Girişi')
  .setDescription('Lütfen Yaşınızı yazın.``[ÖRN:ŁŁ | 17]``')
  .setFooter('Komutu iptal etmek için "iptal" yazın. Otomatik olarak 30 saniye içinde iptal edilecektir.'))
  .then(async () => {
    message.channel.awaitMessages(filter, {
    max: 1,
    time: 30000
  }).then(async (collected) => {
  if (collected.first().content == 'iptal') return message.channel.send(iptal)
  let ii = collected.first().content
  await message.channel.sendEmbed(new Discord.RichEmbed()
  .setColor('#FFB900')
  .setTitle('Komut Girişi')
  .setDescription('Lütfen twitch adınızı yazın.``[ÖRN:CasperSama]``')
  .setFooter('Komutu iptal etmek için "iptal" yazın. Otomatik olarak 30 saniye içinde iptal edilecektir.'))
  .then(async () => {
    message.channel.awaitMessages(filter, {
    max: 1,
    time: 30000
  }).then(async (collected) => {
    if (collected.first().content == 'iptal') return message.channel.send(iptal)
    let iii = collected.first().content
  await message.channel.sendEmbed(new Discord.RichEmbed()
  .setColor('#FFB900')
  .setTitle('Komut Girişi')
  .setDescription('Lütfen başvuru yapacağınız Yetkiyi yazın. ``[ÖRN: Mod,Admin,Dc görevlisi,Kayıt görevlisi,Destek ekivi]``**Yönetim Ekibi formu şuanda kapalıdır,yazanın formu silinecektir!**')
  .setFooter('Komutu iptal etmek için "iptal" yazın. Otomatik olarak 30 saniye içinde iptal edilecektir.'))
  .then(async () => {
    message.channel.awaitMessages(filter, {
    max: 1,
    time: 30000
  }).then(async (collected) => {
    if (collected.first().content == 'iptal') return message.channel.send(iptal)
    let iiii = collected.first().content
  await message.channel.sendEmbed(new Discord.RichEmbed()
  .setColor('#FFB900')
  .setTitle('Komut Girişi')
  .setDescription('Lütfen tecrübelerinizi kısa bir şekilde yazın.```[ÖRN:Birçok serverde adminlik yaptım vs.]``')
  .setFooter('Komutu iptal etmek için "iptal" yazın. Otomatik olarak 30 saniye içinde iptal edilecektir.'))
  .then(async () => {
    message.channel.awaitMessages(filter, {
    max: 1,
    time: 30000
   }).then(async (collected) => {
    if (collected.first().content == 'iptal') return message.channel.send(iptal)
    let iiiii = collected.first().content
     await message.channel.sendEmbed(new Discord.RichEmbed()
  .setColor('#FFB900')
  .setTitle('Komut Girişi')
  .setDescription('Lütfen Günde kaç saat aktif olabileceğinizi yazın.```[ÖRN:Günde 6 saat aktif olabilrim.]``')
  .setFooter('Komutu iptal etmek için "iptal" yazın. Otomatik olarak 30 saniye içinde iptal edilecektir.'))
  .then(async () => {
    message.channel.awaitMessages(filter, {
    max: 1,
    time: 30000
   }).then(async (collected) => {
    if (collected.first().content == 'iptal') return message.channel.send(iptal)
    let iiiiii = collected.first().content
    await message.channel.send(' Başvurunuz alınmıştır.')
  const millisCreated = new Date().getTime() - message.author.createdAt.getTime();
  const daysCreated = moment.duration(millisCreated).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")      
        
         let embed = new Discord.RichEmbed()
         .setAuthor(`📋 ${message.author.username} adlı kullanıcının başvurusu;`)
         .addField('**❯ Kullanıcı:**', `<@${message.author.id}>`, true)
         .addField('**❯ Kullanıcı ID:**', `${message.author.id}`, true)
         .addField('**❯ Hesap Kuruluşu:**', `${daysCreated}`, true)
         .addField('**❯ Gerçek İsmi:**', i, true)
         .addField('**❯ Yaşı:**', ii, true)
         .addField('**❯ Twitch adı:**', iii, true)
         .addField('**❯ Başvuru Yaptığı Katagori:**', iiii, true)
         .addField('**❯ Tecrübeleri:**', iiiii, false)
         .addField('**❯ Aktiflik süresi:**', iiiiii, false)
         .setColor('#FFB900')
         .setThumbnail(message.author.avatarURL || message.author.defaultAvatarURL)
    await message.guild.channels.get(bas).send(embed)
    })
  })
    })
  })
    })
  })
    })
  })
    })
 })
    })
 })   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'başvuruyap',
  description: 'Sureli Susturur.',
  usage: 'geçici-sustur [Kullanıcı] [Süre]'
};