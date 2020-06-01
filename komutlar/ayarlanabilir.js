const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ ayarlanabilir komutlar | Not:Komutlar c; ile baslar	
• kayıt-rol-ayarla  :: Kayıt olunca verilecek rolü ayarlar.	
• kayıtkanal:: Kayıt olma kanalını ayarlar.		
• kayıtsistemi aç :: Kayıt sistemini açar.		
• otorol    :: Otorol kanalı ve rolu ayarlar.	
• küfürengel:: küfür engellemeyi açar.
• gkanal    :: Giriş çıkış ayarlar.
• güvenlik  :: Güvenlik kanalını ayarlar.
• sayaç-ayarla  :: Sayaç sayısını ve kanalını ayarlar
• seviye-ödül :: Seviye ödülünü ayarlar.
    Sayfa 1 / 1 Yapımcım: ! CasperSama#4412`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ayarlanabilir'],
  permLevel: 0
};

exports.help = {
  name: 'ayarlanabilir',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'ekstra'
};