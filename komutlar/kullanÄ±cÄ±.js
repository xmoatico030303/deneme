const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ Kişisel komutlar | Not:Komutlar vt! ile baslar
        • Eglence Komutlari		
• değişiklikler   :: Sunucuda Yapilan değişiklikleri gosterir.
• istatistik      :: Bot Istatistiligini Gosterir.
• afk             :: Afk Olursun
• unafk           :: Afkliktan Cikarsin. 
• kullanıcıbilgim :: kullanıcı bilgini gosterir.
• sunucuicon      :: Sunucu İcon Gösterir.
• sunucubilgi     :: Sunucu Bilgisini Gosterir.
• yapimcim        :: Bot Yapimcisini Gosterir.
• davet           :: Davet Link Verir.
• sponsor         :: Sponsorlarimizi Gosterir.		
• ailemiz         :: Bot Kac Sunucuda Oldunu Gosterir.		
• randomşifre     :: Kafadan Sifre Verir		
• ping            :: Botun pingini gösterir.
• avatarım        :: Avatarini Gosterir
• hastebin        :: Yazdin Komudu Hastebin Donusturur
• değişiklikler   :: Bota Yapilan Degisikler.
• sor             :: Istedini Bota Sorar
• yaz             :: Bota Yazdirir.
• havadurumu      :: hava durumunu gösterir.
• hesapla         :: istediğiniz işlemi yapar.
• canlidestek     :: yetkililer ile iletişime geçersiniz.
• öneri           :: önerilerinizi yazarsınız. 
• linkkısalt      :: link kısaltır.
• rolbilgi        :: rol hakkın da bilgi verir
• twitch          :: Yayincinin yayinda olup olmadigini gosterir.
• yapımcım        :: Bot yapımcısını gösterir 
• roller          :: sunucuda ki rolleri gösterir.
• oyunbilgi       :: oyun hakkında bilgi verir.
• kaçkişiyiz      :: sunucuda kaç kişi oldugunu gösterir.
• üyedurum        :: Üye Durumlarını ve sunucudaki üye sayısını gösterir
• boteklet        :: eklenmesini istediğiniz botu önerir
• Kayıt           :: Sunucuya kayıt olursunuz
• seviye          :: Serverde ki seviyenizi gösterir.
• destekaç        :: Destek talebi açarsınız.
• destekkapat     :: Destek talebini kapatırsınız.
    Sayfa 1 / 1 | Yapımcım: ! CasperSama#4412`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'kullanıcı'
};