const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = async(client, message, args) => {
    let msg = await message.channel.send("Resim aranıyor...");

    let {body} = await superagent 
    .get('https://some-random-api.ml/animu/wink');
    if(!{body}) return message.channel.send(":h_: Bir hata oluştu. Tekrar deneyiniz.")

    const embed = new Discord.RichEmbed()
    .setColor('ORANGE')
    .setDescription("**"+message.author.username+"**")
    .setImage(body.link)
    message.channel.send({embed})

    msg.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
    name: "okey",
    description: "",
    usage: "STARK"
};