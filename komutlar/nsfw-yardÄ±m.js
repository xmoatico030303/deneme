const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
  .setTitle("nsfw Komutları")
  .setDescription('')
  .setColor(0x00ffff)
  .addField(`:white_small_square: ${ayarlar.prefix}nsfw-4k`, "+18 Fotoğraf Atarım.")
  .addField(`:white_small_square: ${ayarlar.prefix}anal`, "+18 Fotoğraf Atarım")
  .addField(`:white_small_square: ${ayarlar.prefix}ass`, "+18 Fotoğraf Atarım")
  .addField(`:white_small_square: ${ayarlar.prefix}nsfw-gif`, "+18 Fotoğraf Atarım")
  .addField(`:white_small_square: ${ayarlar.prefix}pussy`, "+18 Fotoğraf Atarım")
  .addField(`:white_small_square: ${ayarlar.prefix}hentai_anal`, "+18 Fotoğraf Atarım")
  .addField("**Yapımcım**", " **@⍚CasperSama#4412* ")
  .addField("**» Linkler**", `**[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=630261423511044156&scope=bot&permissions=2146958591 **`)
  .setFooter('© 2019 Bot™', client.user.avatarURL)
  .setTimestamp()
  .setThumbnail(client.user.avatarURL)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nsfw',
  description: 'Eğlence komutlarını gösterir.',
  usage: 'eğlence'
};