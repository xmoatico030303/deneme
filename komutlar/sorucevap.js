

const Discord = require('discord.js');
const soru = [
  { sc: "Bulutlar Ne Renktedir?", a: ["renksizdir", "görünmezdir"] },
  { sc: "Dünyadaki En Ünlü İçecek Markası Nedir?.", a: ["kola", "koka kola", "coka cola"] },
  { sc: "Avox Hangi Programlama Dilinden Meydana Gelmiştir?", a: ["javascript", "discord.js"] },
  { sc: "Güneş Sistemindeki 7. Gezegen Nedir?", a: ["uranüs"] },
  { sc: "Dünyanın En Büyük Adasının Adı Nedir?", a: ["greenland", "grönland"] },
  { sc: "Dünyanın En Büyük Ormanının Adı Nedir?", a: ["amazon"] },
  { sc: "Dünyanın En Büyük Okyanusunun Adı Nedir?.", a: ["pasifik"] },
  { sc: "Gökkuşağı Kaç Renkten Oluşur?", a: ["7", "yedi"] },
  { sc: "Bilgisayarlardaki 'OS' Yazısı Ne Anlama Gelmektedir?", a: ["operating system", "sistem", "sürüm"] },
  { sc: "Jüpiterin Kaç Uydusu Vardır?", a: ["63", "altmış üç"] },
  { sc: "Dünya Kaç Katmandan Oluşur?", a: ["5", "beş"] },
  { sc: "Aya İlk Ayak Basan İnsan Kimdir?", a: ["neil armstrong", "armstrong"] },
  { sc: "Hava Elektiriği İletirmi?", a: ["bağzen", "bazen"] },
  { sc: "İlk Kadın Pilotun Adı Nedir?", a: ["sabiha gökçen"] },
  { sc: "Dünyanın En Soğuk Yeri Neresidir?", a: ["antartika"] },
  { sc: "Dünyanın En Sıcak Yeri Neresidir?", a: ["el aziziye"] },
  { sc: "Türkiyeden Diğer Ülkere Nazaran Daha Fazla Çıkan Madeni Nedir?", a: ["bor"] },
  { sc: "Atatürkün Adı Olan Kemal İsmini Kim Koymuştur?", a: ["matematik hocası", "matematik öğretmeni", "matcısı"] },
  { sc: "2018 Yılında Ölen Ünlü Fizikçi Kimdir", a: ["stephen hawking", "hawking"] },
  { sc: "2018 Yılında Ölen Ünlü Dj Kimdir (En Ünlü Şarkısı: Wake Me Up)", a: ["avicii", "tim bergling", "bergling"] },
  { sc: "`TDK`nın açılımı nedir?", a: ["türk dil kurumu","türk dil","tdkurumu"]},
  { sc: "AtaTürke Mustafa Ismini Kim Koymuştur?", a: ["annesi","babası","annesi ve babası"]},
  { sc: "Türkiye'de en son ne zaman darbe girişiminde bulunulmuştur?", a: ["15 temmuz","15i temmuz"]},
  { sc: "`Tablet Reyiz`in gerçek adı nedir?", a: ["onurcan","onur","güzel","onurcan güzel"]},
  { sc: "Ömer Setfettin kimdir?", a: ["yazar","öykü yazarı","hikaye yazarı"]},
  { sc: "Kaldırılan TEOG siteminin açılımı nedir?", a: ["temel öğretimden orta öğretime geçiş","temel öğretim","orta öğretime geçiş"]},
  { sc: "`Çanakkale Zaferi` hangi savaşa dahildir?", a: ["ww1","1. dünya savaşı","birinci dünya savaşı","1 dünya savaşı"]}, 
  { sc: "Istanbulu kuşatan ilk Türk devleti hangisidir ??", a: ["avarlar","avar devleti"]},
  { sc: "Türkiye` nin uluslararasi telefon kodu kaçtır?", a: ["90","+90"]},
  { sc: "Azerbaycan` ın uluslararası telefon kodu kaçtır?", a: ["994","+994"]},
  { sc: "`Küçük Prens` adlı hikâyenin yazarı kimdir?", a: ["antonie","saint","antonie saint","exupery","saint exupery","antonie de saint exupery"]},
  { sc: "Hücrede enerji üretimini sağlayan organel nedir?", a: ["mitokondri","mito","kondri"]},
  { sc: "Mehmet Akif Ersoy `Istiklal Marşı` telif ödülünü hangi kuruma bağışlamıştır?", a: ["darülmesai","darül","mesai"]},
  { sc: "Avrupa Birliği'nin başkenti neresidir?", a: ["brüksel","brük"]},
  { sc: "Ünlü fizikçi `Albert Einstein` hangi yıl Amerikan vatandaşı olmuştur?", a: ["1940","bin dokuz yüz kırk"]},
  
  
  
];
const options = {
  max: 1,
  time: 10000,
  errors: ["time"],
};

module.exports.run = async (Octopus, message, args) => {
  
  const item = soru[Math.floor(Math.random() * soru.length)];
  await message.channel.send(item.sc);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`Tebrikler: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Verilen Doğru Cevap: \`${winnerMessage.content}\``)
                                 .setFooter(`Sorulan Soru: ${item.sc}`)
                                 .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`)
                                })
  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor('Soruyu Zamanında Bilemedin')
                                 .setTitle(`Cevap: \`${item.a}\``)
                                 .setFooter(`Sorulan Soru: ${item.sc}`)
                                })
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sinav'],
  permLevel: 0
};

exports.help = {
  name: 'sorucevap',
  description: 'Seçtiğiniz 2 kişiyi savaştırırsınız.',
  usage: 'sorucevap'
};