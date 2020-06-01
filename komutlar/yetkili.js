const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ Yetkili komutlar | Not:Komutlar vt! ile baslar	
  • istatistik      :: Bot Istatistiligini Gosterir.
  • anket    :: Anket Acar		
  • ban      :: İstediğiniz kişiyi sunucudan yasaklar.
  • kick     :: İstediğiniz kişiyi sunucudan atar.
  • sustur   :: İstediğiniz kişiyi susturur.
  • temizle  :: Mesajları siler.
  • uyar     :: İstediğiniz kişiye uyarı verir.
  • duyuruyap:: Sunucunuzda duyuru yapmanızı sağlar.
  • kilit    :: Unuttum :(
  • unload   :: Yetkili Bilir
  • unban    :: Ban Kaldirir.
  • terfi    :: Kullaniciyi Terfi Eder
  • Sayacaç  :: sayaç acar.
  •Sayackapat:: Sayaç kapatır.
  • oylama   :: Oylama yapar.
  • çekiliş  :: çekiliş yapar.
  • kanalismideğiş :: kanal ismini değistirir.
  • ses-kanal-aç :: ses kanalı açar.
  • yavaşmod :: yavaş modu açar.
  • yazı-kanal-aç:: yazı kanalı açar.
  • reklamtaraması:: oynuyor kısmında ki reklamları tarar
  • temizle2 :: Gelişmiş sohbet temizleme
  • güvenlik :: Güvenlik kanalı ayarlar
  • capslock-engel :: Capslock kullanımını engeller.
  • kayitsistemi :: Kayıt sistemini açar
  • süreli-mute:: Etiketlediğiniz kişiye belirttiğiniz süre kadar mute atar
  • tag      :: Oto tagı ayarlar.
  • süreliban:: Etiketlenen kullanıcıyı süreli olarak banlar
  • gkanal   :: Giriş çıkış kanalını ayarlar
  • kkanal   :: Kayıt kanalını ayarlar.
  • küfür    :: Küfür engelleme sistemini açar.
  • süreli-kanal : Süreli kanal olusturur.
  • otorol   :: Otorol komutlarını gösterir.
    Sayfa 1 / 1 | Yapımcım: ! CasperSama#4412`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'yetkili'
};