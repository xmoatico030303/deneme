const Discord = require('discord.js')
const ayaretmebeni = require('../ayarlar.json')
const db = require("quick.db")


var prefix = ayaretmebeni.prefix

exports.run = async (client, message, args) => {
if(message.author.id !== 'SAHİP ID' & message.author.id !== '2. SAHİP ID ') return message.channel.send('Bu Komutu Sadece Yapımcım Kullanabilir!')//2. sahip yoksa bunu sil alltaki kalsın
//if(message.author.id !== 'SAHIP ID' ) return message.channel.send('Bu Komutu Sadece Yapımcım Kullanabilir!')
let kişi = await message.mentions.users.first()

var i = args[1]

if(!i) return message.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`:no_entry_sign: \`aç\` veya \`kapat\` yaz! \nKullanımı; ${prefix}gold @Gold-Olacak-Kişi aç/kapat`)
  }});
  
if(i === "aç") {
db.set(`golduye.coderscode_${kişi.id}`, "acik")
message.channel.send(`✔ | **${kişi.tag}** Adlı Kullanıcı İçin Gold Üye Açıldı!`)
} else {
if(i === "kapat") {
db.delete(`golduye.coderscode_${kişi.id}`)
message.channel.send(`✔ | **${kişi.tag}** Adlı Kullanıcı İçin Gold Üye Kapatıldı!`)
} else {
  return message.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`:no_entry_sign: \`aç\` veya \`kapat\` yaz!`)
  }});
}
}
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}
exports.help = {
    name: 'gold-yap',
    description: 'Coders Kod Paylaşım Ve Bot Barındırma  Sunucusuna Aittir.',
    usage: "İzin Almadan Paylaşmayın! Kullanımı; (prefix)gold @Gold-Olacak-Kişi aç/kapat"
}