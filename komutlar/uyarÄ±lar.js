const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
let test = []
message.guild.members.forEach(u => {
  test.push({name: u.user.username.toLowerCase(), id: u.id})
})
var user = ''
if (args[0] && !message.mentions.users.first()) {
  var user = client.users.get(args[0]) || client.users.get(test.find(u => u.name.includes(args.join(" ").toLowerCase())).id)
} else if (message.mentions.users.first()) {
  var user = message.mentions.users.first()
} else {
  var user = message.author
}
let member = message.guild.member(user);
  
let i = await db.get(`uyarı.${user.id+message.guild.id}`) || '0'
return message.channel.send(`**${user.tag}** adlı kullanıcının \`${i}\` uyarısı var.`)
};

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
};

exports.help = {
   name: 'uyarılar',
   description: '',
   usage: ''
};

