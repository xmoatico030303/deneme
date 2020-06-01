const Discord = require('discord.js')
exports.run = (client, message, args) => {

  message.channel.send(
    new Discord.RichEmbed()
      .setColor('#000000')
      .setTitle('Buraya mesajın başlığını yazalım.')
      .setURL('https://discord.gg/TQxHWkC')
      .setAuthor('Buraya botun ismini, komutu kullananın ismini, veya herhangi birşey yazabilirsiniz.', 'https://cdn.discordapp.com/icons/495518657636466699/fe32292c20436738c71339e0cc9b6217.png?size=128', 'https://discord.gg/TQxHWkC')
      .setDescription('Buraya bir açıklama yazalım.')
        .setThumbnail('https://cdn.discordapp.com/icons/495518657636466699/fe32292c20436738c71339e0cc9b6217.png?size=128')
        .addField('Bu metinler, aşağıdakilerden farklı olarak yan yana değil, alt alta duruyor.', 'Metnin açıklamasını yazıyoruz')
      .addField('Bu metinler, aşağıdakilerden farklı olarak yan yana değil, alt alta duruyor.', 'Metnin açıklamasını yazıyoruz')
        .addBlankField()
        .addField('Buraya bir metin yazıyoruz.', 'Buraya açıklamasını yazıyoruz', true)
        .addField('Buraya bir metin yazıyoruz.', 'Buraya açıklamasını yazıyoruz', true)
        .setImage('https://cdn.discordapp.com/icons/495518657636466699/fe32292c20436738c71339e0cc9b6217.png?size=128')
        .setTimestamp()
        .setFooter('Yukarıdaki gibi komutu kullananın ismini, botun ismini veya herhangi bir şey yazabilirsiniz.', 'https://cdn.discordapp.com/icons/495518657636466699/fe32292c20436738c71339e0cc9b6217.png?size=128')
  )
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'komut'
}