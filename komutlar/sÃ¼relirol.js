const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
            let member2 = message.mentions.members.first();
            if(!member2) return message.reply("❌ " + "| Bir kullanıcı / üyeden bahsetmelisin!");

            let muteRole2 = message.mentions.roles.first();
            if(!muteRole2) return message.reply("❌ " + `| Böyle bir rol yok!`);
            
            let time2 = args[2];
            if(!time2) {
              member2.addRole(muteRole2.id);
              message.channel.send(member2 + ` size kalıcı bir rol verildi: ` + muteRole2.name);
            }else {
              member2.addRole(muteRole2.id);
              message.channel.send(member2 + `Rol verildi.: ` + muteRole2.name + ` için: ${ms(ms(time2), {long: true})}`);

              setTimeout(function(){
                member2.removeRole(muteRole2.id);
                message.channel.send(member2 + ` senden vazgeçtin, zaferin sürdü: ${ms(ms(time2), {long: true})}`)

              }, ms(time2));

              };
              }else {
                return message.reply("❌ " + "| Gerekli yetkilerin yoktur.")
              };
}

module.exports.help = {
    name: "addrole"
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['l'],
  permLevel: 2
};

exports.help = {
  name: 's-rolver',
  description: 'Süreli Rol Verir.',
  usage: 'seviye'
};