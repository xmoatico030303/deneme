exports.run = function(client, message, args) {
        message.channel.send("Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın :shrug: \n Örnek Kullanım : ```!sayaç-ayarla #kanal <Sayı>``` ");
    };
//

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

module.exports.help = {
  name: 'sayaç',
  description: '',
  usage: 'test'
};