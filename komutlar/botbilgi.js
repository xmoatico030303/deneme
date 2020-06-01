const Discord = require('discord.js');


exports.run = function(client, message) {
  
  const bot = client
  const bolat = client.user;
  const tag = bolat.tag;
  const sunucu = client.guilds.size;
  const kullanıcı = client.users.size;
  const kanal = bot.channels.size;
  const ping = client.ping;
  const link = "https://discordapp.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8";
  const ayarlar = require("../ayarlar.json")
  const prefix = ayarlar.prefix
  
message.channel.send(
new Discord.RichEmbed()
  .setTitle("Casper - Bot Bilgi")
  .setDescription("**İsim: **" + bolat + "\n**Tag: **" + tag + "\n**Hizmet Edilen Sunucu: ** " + sunucu + "\n**Hizmet Edilen Kullanıcı: **" + kullanıcı + "\n**Hizmet Edilen Kanal: **" + kanal + "\n**Gecikme Süresü:** " + ping + " MS" + "\n**Prefix: **" + prefix + "\n▬▬▬▬▬▬▬▬▬▬▬" + "\n[Sunucuna Ekle](https://discordapp.com/oauth2/authorize?client_id=615894660652728370&scope=bot&permissions=2146958847)")
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter("**Casper** İyi Günler Diler.")
)
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ["istatistik"],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'botbilgi',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Bot hakkında bilgileri gösterir',//Komutun Açıklaması
  kategori: 'bot',// Komutun olduğu kategori. kategoriler: bot-yetkili-ayarlar-kullanıcı-sunucu-eğlence-efektcerceve
  usage: 'botbilgi' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}