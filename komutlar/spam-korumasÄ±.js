const Discord = require('discord.js');
const fs = require('fs');
let spamEngel = JSON.parse(fs.readFileSync("./ayarlar/spamEngelle.json", "utf8"));

var ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`Bu komutu kullanabilmek için **Kanalları Yönet** iznine sahip olmalısın!`);

    let args = message.content.split(' ').slice(1);
        let prefix = ayarlar.prefix
    const secenekler = args.slice(0).join(' ');

    var errembed = new Discord.RichEmbed()
    .setColor("RED")
  .setFooter(`Pikachu Code Anti Spam Sistemi`, client.user.avatarURL)
  
    .setAuthor(`Pikachu Code `, client.user.avatarURL)
    .addField("**__Pikachu Code Anti Spam Sistemi__**","Sunucunuzda Üyelerin Spam Yaptiğinda Bu Ozellik Ile Susturulur!")
  .addField("Anti Spam Engelleme","Sunucunuzda Bu Ozelliği Açmak Istiyosanısa **!!anti-spam aç** Kapatmak Istoyosanızsa **!!anti-spam kapat** yazmaniz Yeterlidir.")
    if(secenekler.length < 1) return message.channel.send(errembed);
    //if(secenekler === "aç" || "kapat") return message.channel.send(errembed); (bunu da kullanabilirsiniz.)
      if(secenekler.length < 1) return message.reply("Anti Spam engelleme Sistemini Açmak Icin `+anti-spam aç` Kapatmak Için `+anti-spam kapat` Yazmalısn").then(m => m.delete(10000));

    message.delete();

            if (secenekler === "aç") {
        message.channel.send(`Anti Spam koruma sistemi bu sunucuda açıldı. `).then(m => m.delete(5000));
        spamEngel[message.guild.id] = {
            spamEngel: "acik"
          };

          fs.writeFile("././ayarlar/spamEngelle.json", JSON.stringify(spamEngel), (err) => {
            if (err) console.log(err)
          });
    };

    if (secenekler === "kapat") {
        message.channel.send(`Anti Spam Koruma sistemi bu sunucuda devre dışı bırakıldı. <:hayr:560740689659297813>`).then(m => m.delete(5000));
        spamEngel[message.guild.id] = {
            spamEngel: "kapali"
          };

        fs.writeFile("././ayarlar/spamEngelle.json", JSON.stringify(spamEngel), (err) => {
            if (err) console.log(err)
          });
    };
}

    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['anti-spam']
      };

      exports.help = {
        name: 'anti-spam-sistemi',
        description: 'spam engelleme sistemini açarsınız/kapatırsınız.',
        usage: 'spam-engelle <aç> veya <kapat>'
      };