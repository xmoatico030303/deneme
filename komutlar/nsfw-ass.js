const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'ass'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("Bu kanal bir NSFW kanalı değil!")
  }
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['nsfwass'],
   permLevel: 0
 };

 exports.help = {
   name: 'ass',
   description: '+18 Resim Gösterir',
   usage: 'nsfw-ass'
 };