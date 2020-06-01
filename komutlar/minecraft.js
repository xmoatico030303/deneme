const discord = require("discord.js")

var minecraft = [
  "herobrine",
  "zombi",
  "creeper",
  "steve",
  "domuz",
  "at",
  "koyun",
  "inek",
  "örümcek",
  "tavuk",
  "köpek"
];
exports.run = async(client, message, args) => {

const karakter = minecraft[Math.floor(Math.random() * minecraft.length)];
var resim = ""
if (karakter === "herobrine") {
 resim = "https://media.giphy.com/media/OzJ4bGpmSHBwA/giphy.gif"
}

if (karakter === "zombi") {
 resim = "https://media.giphy.com/media/WtDaSUB8GDiRW/giphy.gif"
}

if (karakter === "creeper") {
 resim = "https://media.giphy.com/media/25oFarLxPqrNS/giphy.gif"
}

if (karakter === "steve") {
 resim = "https://media.giphy.com/media/OqcMrG8CJcZ9K/giphy.gif"
}

if (karakter === "domuz") {
  resim = "https://media.giphy.com/media/6AfHfqOF4j280/giphy.gif"
}

if (karakter === "inek") {
  resim = "https://media.giphy.com/media/2ad3tG4bubpyU/giphy.gif"
}

if (karakter === "koyun") {
  resim = "https://media.giphy.com/media/TOkOM7ywZC6OI/giphy.gif"
}

if (karakter === "inek") {
  resim = "https://media.giphy.com/media/2ad3tG4bubpyU/giphy.gif"
}

if (karakter === "örümcek") {
  resim = "https://media.giphy.com/media/GZBMZxafUbaPS/giphy.gif"
}

if (karakter === "tavuk") {
  resim = "https://media.giphy.com/media/zDuStFVpRJIZ2/giphy.gif"
}

if (karakter === "köpek") {
  resim = "https://tenor.com/view/minecraft-dogxchicken-gif-3489315"
}

message.channel.send(
new discord.RichEmbed()
.setTitle("Minecraft Karakter")
.setDescription(message.author.toString() + " **Karakterin:** " + karakter)
.setImage(resim)
  );
}

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ["mc", "mckarakterim", "minecraftkarakterim"],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'minecraft',//Komutun adı (Komutu girerken lazım olucak)
  category: 'eğlence',// Komutun olduğu kategori. kategoriler: bot-sunucu-yetkili-kullanıcı
  description: 'Temsil ettiğiniz minecraft karakterini gösterir',//Komutun Açıklaması
  usage: 'minecraft' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}