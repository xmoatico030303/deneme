const m = require("moment");
exports.run = function(client, message, args) { 
  
//reply komutunu kullanan kişiyi etiketler
m.locale("tr");
const saat = m().format("HH") + 3
message.reply(m().format("LL") + " " + saat + ":" + m().format("mm:ss") + " tarihinde sisteme giriş yaptı.")
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kodadı2", "kodadı3"],
  permLevel: "botunuza uygun permleveli girin"
};

exports.help = {
  name: "kodadı"
};