const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ Eglence komutlar | Not:Komutlar vt! ile baslar
        • Eglence Komutlari		
•  8ball    :: 8ball oynarsınız.
• Atatürk	  :: Atatürk ile ilgili mesaj verir.	
• kaçcm     :: Kac Cm Oldunu Yazar.
• koş       :: Koşarsınız.
• Wtcn      :: Rastgele wtcn Resmi Cikarir.
• twerk     :: Dene Gor :D
• sins-aga  :: Dene Gor :D
• elraen    :: Rastgele elden resmi atar.
• coolresim :: Cool Resim Gosterir.
• mcödül    :: Istediniz Yaziyi Minecraft Basarisina Dondurur.
• miafitz   :: Rastgele miafitz resmi atar.
• yazıtura  :: yazı-tura oynarsınız.
• yumruh-at :: yumruk atarazınız.
• çekiç     :: Birine çekiç atar.
• urfa      :: Urfa sipariş eder.
• tkm       :: taş kağıt makas oynarsınız.
• herkezebendençay :: .
• simit     :: Simit yer.
• sor       :: soru sorar.
• slots     :: Slot oyunu oynar
• ara155(110.112)    :: 155i arar.
• stresçarkı:: stres çarķı çevirir.
• askolcer  :: Aşkınızı ölçer.
• kahkaha   :: kahkaha atar.
• korkut    :: istediğiniz kişiyi korkutur
• banner    :: Yazdıgınızı resimli şekilde yazar.
• balıktut  :: Balık tutarsınız.
• kafasınasık :: Kafasına sıkarsın.
• kartopu   :: Kartopu atarsın.
• nahçek    :: Nah çeker.
• starwars  :: Starwars gif atar
• tersavatar:: avatarınızı ters çevirir.    
• boksmakinası :: boks makinasına vurursunuz.
• habboavatar ::  Bot size rastgele habbo avatarı atar
• anime     :: Rastgele anime atar
• mc        :: Minecraft karakteri atar.
• yazan-kazanor :Kelime yarışı.
    Sayfa 1 / 1 | Yapımcım: ! CasperSama#4412`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'eglence',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'eglence'
};
