const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')


exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('Bu komutu kullanabilmek için "``Mesajları Yönet``" iznine sahip olmalısın!');
      const kufur = [];
    const members = message.guild.members.filter(member => member.user.presence.game && /(amk|oç|piç|sikiyim|sik|sok|annen)/g.test(member.user.presence.game.name));
    const memberss = message.guild.members.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram|sik|sok|annen|amcık|oç|orsobu|orosbu|yavşak)/g.test(member.user.username));
    const embed = new Discord.RichEmbed()
        .addField('Oynuyorunda Küfür İçeren Kullanıcılar', members.map(member => `${member} = ${member.user.presence.game.name}`).join("\n") || "| Oynuyorunda küfür bulunan yok.")
        .addField('Kullanıcı Adında Küfür İçeren Kullanıcılar', memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "| Kullanıcı adında küfür bulunan yok.")
        .setColor("RED")
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 1
}

exports.help = {
    name: 'küfürara',
    description: '',
    usage: 'STARK'
}