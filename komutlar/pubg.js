const Discord = require('discord.js');
exports.run = (client, message, args) => { 
    var Jimp = require("jimp");

  message.channel.send(``)
    let img    = Jimp.read(message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL),
    moldura = Jimp.read("https://i.internethaber.com/storage/files/images/2019/03/28/pubgnin-en-iyileri-istanbulda-bu-LYJn_cover.jpg");
    Promise.all([img, moldura]).then(imgs => {
    let moldura = imgs[0],
        img = imgs[1];
    moldura.resize(78, 74);    // KULLANICI FOTOĞAFI <-
    img.resize(392, 184)   // ARKA PLAN BÜYÜKLÜĞÜ
       
    img.composite(moldura, 180, 16).getBuffer(Jimp.MIME_PNG, (err, buffer) => { // X-Y-Z
        if (!err) 
        message.channel.send(new Discord.Attachment(buffer));    
       
    
    
    });
    
    
    
   });
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pubg','pubg'],
  permLevel: 0
};
exports.help = {
  name: 'pubg',
  description: 'pubg.',
  usage: 'c;!pubg'
};