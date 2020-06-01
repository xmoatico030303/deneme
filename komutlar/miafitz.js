const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  


    let replies = ["https://postimg.cc/D4QZKDx8,https://postimg.cc/CdbdDBwS,https://postimg.cc/PC5qBSY5,https://postimg.cc/gxt0d3Hq,https://postimg.cc/BXqZKmhB,https://postimg.cc/4KKx3n8C,https://postimg.cc/2Vmyxk5v,https://postimg.cc/PP4x3gL7,https://postimg.cc/p5MT4xYw,https://postimg.cc/XZT7B3hr,https://postimg.cc/phzVD4bq,https://postimg.cc/YLxpPFSF,https://postimg.cc/bd0Nr7Rv,https://postimg.cc/56n4q8Td,https://postimg.cc/9D0WxrH4,https://postimg.cc/qNFpW4p1,https://postimg.cc/yJS7Htds,https://postimg.cc/MM2qK5MR,https://postimg.cc/1nGPgFwd,https://postimg.cc/1nGPgFwd"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Fotoğrafın! <a:heart:553341691822866442>")
        .setColor("RANDOM")
        .setFooter(`Miafitz Fotoğraf!`, message.author.avatarURL)
        .setFooter(`RidenLive Tarafından Editlenmiştir.`, message.author.avatarURL)
        .setImage(replies[result]);
  


    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mia','miafitz'],
  permLevel: 0
};

exports.help = {
  name: 'miafitz',
  description: 'Rastgele Miafitz fotoğrafları atar.',
  usage: 'miafitz'
}; 