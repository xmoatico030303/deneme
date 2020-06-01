const ayarlar = require("../ayarlar.json");   
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => { 
    if (message.author.id == message.guild.owner.user.id) {
        message.channel.send("Sunucu sahiplerinin takma adları sadece kendileri tarafından değiştirilebilir.");
    } else { var msg = message.content
        var nick = msg.substr(ayarlar.prefix.length + 5);
        if (nick.length == 0) {
            message.reply("takma adınızı sıfırladım.");
            message.member.setNickname(message.author.username).catch(function(error) {
                message.channel.send("**Hata:** Takma ad ayarlanamadı. Takma adları değiştirme ve ayarlama iznim olduğundan emin olun.");
            });
        } else if (nick == "sıfırla") {
            message.reply("takma adınızı sıfırladım."); 
            message.member.setNickname(message.author.username).catch(function(error) {
                message.channel.send("**Hata:** Takma ad ayarlanamadı. Takma adları değiştirme ve ayarlama iznim olduğundan emin olun.");
            });
        } else if (nick.length >= 33) {
            message.channel.send("**Hata:** Takma adlar 32 karakterden uzun olamaz.");
        } else {
            message.reply("yeni takma adınız `" + nick + "` olarak ayarlandı.");
            message.member.setNickname(nick).catch(function (error) {
                message.channel.send("****Hata:** Takma ad ayarlanamadı. Takma adları değiştirme ve ayarlama iznim olduğundan emin olun.");
            });
        }
    }
}                                              
module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nick", "takmaad", "takma-ad-ayarla"],
  permLevel: 0
};

module.exports.help = {
  name: 'takma-ad',
  description: 'Sunucudaki takma adınızı ayarlar.',
  usage: 'takma-ad <nick>'
};