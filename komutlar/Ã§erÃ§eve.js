const Discord = require("discord.js");
var Jimp = require('jimp');
exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
  
  	if (args[0] === 'bjk') {
        var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://store.donanimhaber.com/77/eb/82/77eb82f6b1507fe9d67ed809014fb9d8.png", (err, avatar) => {
        avatar.resize(115, 120)
        image.composite(avatar, 0, 190).write(`./secim/balance1/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance1/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
  	if (args[0] === 'fb') {
        var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://upload.wikimedia.org/wikipedia/tr/8/85/200px-Fenerbah%C3%A7e.png", (err, avatar) => {
        avatar.resize(115, 120)
        image.composite(avatar, 0, 190).write(`./secim/balance2/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance2/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
  	if (args[0] === 'gs') {
        var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Galatasaray_Sports_Club_Logo.png/616px-Galatasaray_Sports_Club_Logo.png", (err, avatar) => {
        avatar.resize(115, 120)
        image.composite(avatar, 0, 190).write(`./secim/balance3/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance3/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === 'türk') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://www.sirinbabaexpress.com/image/cache/catalog/Seller_9/stiker/31116217172381124329ulkemicin-800x800.png", (err, avatar) => {
        avatar.resize(125, 130)
        image.composite(avatar, 0, 190).write(`./secim/balance4/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance4/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === 'wasted') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://www.sccpre.cat/mypng/full/79-796950_wasted-text-png-gta-v-wasted-filter.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance5/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance5/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === 'hapis') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://cdn.pixabay.com/photo/2013/07/13/12/46/jail-160291_960_720.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, -2).write(`./secim/balance7/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance7/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === 'snipe') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("http://pre06.deviantart.net/9c16/th/pre/f/2012/007/7/f/crosshair__s_cutie_mark_by_snowy_breeze-d4lnjyk.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, -2).write(`./secim/balance8/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance8/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    if (!args[0]) return message.channel.send('**Bu Komutta Toplam 8 Tane Çerçeve Var** `(Lütfen hapis,wasted,snipe,wanted,türk,bjk,fb,gs, arasindan birisini seç.)`');
    if (args[0] < 1) return message.channel.send('**Bu Komutta Toplam 8 Tane Çerçeve Var** `(Lütfen 1den 8e Kadar Bir Sayı Seç)`');
    if (args[0] > 8) return message.channel.send('**Bu Komutta Toplam 8 Tane Çerçeve Var** `(Lütfen 1den 8e Kadar Bir Sayı Seç)`');
    if (isNaN(args[0])) return message.channel.send('**Bu Komutta Toplam 8 Tane Çerçeve Var** `(Lütfen 1den 8e Kadar Bir Sayı Seç)`');
  
  
  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['çerçeve'],
    permLevel: 0,
    kategori: "çerçeve"
  };
  
  exports.help = {
    komut: 'çerçeve',
    description: 'Avatariniza farklı Efekti Ekler.',
    usage: 'çerçeve <>'
  };