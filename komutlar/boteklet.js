const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullanım: c;bot-eklet <BOT ID> <PREFİX>'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('istek-bot Bildirildi!')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının eklenmesi istediği bot:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("bot-eklet", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('618515498505601045').send(embed2);
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['boteklet'],
  permLevel: 0 
};
exports.help = {
  name: 'bot-eklet',
  description: 'Botunuzu Bu Sunucuya Ekleyebilirsiniz.',
  usage: 'bot-eklet <BOT ID> <PREFİX>'
};
