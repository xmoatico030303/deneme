const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ Kişisel komutlar | Not:Komutlar vt! ile baslar	
• mcödül  :: Istediniz Yaziyi Minecraft Basarisina Dondurur.	
• hastebin :: Yazdin Yaziyi hastebin cevirir.		
• ailemiz  :: Bot Kac Sunucuda Oldunu Gosterir.		
• randomşifre :: Kafadan Sifre Verir		
• komutlar :: Tüm komutları listeler.
• ping     :: Botun pingini gösterir.
• duyuru   :: Sunucunuzda duyuru yapmanızı sağlar.
• avatarım :: Avatarini Gosterir
• istatistik :: Bot Istatistik Gosterir.
• randomşifre :: Rondom Sifre Verir.
• seviye-sistemi :: Seviyeni Gosterir.
• counter  :: csgo istatistik gösterir.
• aşçı     :: yazınızı ascii art olarak yazar.
• gitara   :: istediğiniz gifi arar.
• mesajdöndürür:: yazdığınız mesajı ters döndürür.
• davetoluştur :: botu sunucunuza davet eder.
• radio    :: radio açar.
• youtube  :: Youtubede arama yapar
• google   :: googlede arama yapar
• siparis  :: sipariş verirsiniz.
• instagram:: Belirlenen instagram hesabı hakkında bilgi verir      
• emoji-yazı ::Mesajınızı emojiye çevirir.
• bayrak   :: Bayrak resmi atar.
• atatürk  :: Atatürk sözü ve resmi atar.
• gif      :: Gif atar.
• bilezik  :: Bilezik alırsın.
• birillance :: Anlamadım
• lolbilgi :: Lol hesabı hakkında bilgi verir.
• burç     :: Burcunuzun uğurlu sayısını söyler
• nsfw     :: Nsfw gif atar.
    Sayfa 1 / 1 Yapımcım: ! CasperSama#4412`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ekstra',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'ekstra'
};