const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor('RANDOM')
  .addField("** :tada: Eğlence Komutları :tada:**", `c;eğlence = Eğlence Komutlarını Gösterir `)
  .addField("** :busts_in_silhouette: Kullanıcı Komutları :busts_in_silhouette:**", `c;kullanıcı = Kullanıcı Komutlarını Gösterir  `)
  .addField("** :musical_note: Ekstra Komutları :musical_note:**", `c;ekstra = Ekstra Komutlarını Gösterir  `)
  .addField("**:no_entry: Sunucu Yetkilisi Komutları :no_entry:**", `c;yetkili = Sunucu Yetkilisi Komutlarını Gösterir.`)
  .addField("** :keyboard:  Ayarlanabilir Komutlar :keyboard: **", `c;ayarlanabilir = Ayarlanabilir Komutları Gösterir `)
  .addField("** :keyboard:  kayıt Komutları :keyboard: **", `c;kayitsistemi = kayıt Komutları Gösterir `)
  .addField("** :peach:  Nsfw Komutları :peach: **", `c;nsfw = nsfw Komutları Gösterir `)
  .addField("**» Botun Yardım Sunucusu (Support Server)**", "[Yardım Sunucusu](https://discord.gg/ZsfXTHd)")
  .addField("**» Botun Davet Linki **", "[Davet Linki](https://discordapp.com/oauth2/authorize?client_id=630261423511044156&scope=bot&permissions=2146958591)")
  .setFooter('Casper Güncel Sürüm [ BETA v0.2.1  ]')
if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım', 'halp', 'help', 'komutlar'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};