const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://nekos.life/api/v2/img/avatar`);

  let generateembed = new Discord.RichEmbed()
  .setColor("#ffa500")
  .setTitle(`Random anime avatar!`)
  .setTimestamp()
  .setImage(body.url);

  message.channel.send(generateembed);

}


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["randomavatar","anime"],
  permLevel: 0
};

module.exports.help = {
  name: 'animeavatar',
  description: 'Rastgele Anime avatarı atar.',
  usage: 'animeavatar'
};