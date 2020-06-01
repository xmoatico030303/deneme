const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
  // Pikachu Code'a Aittir!

  let pikachucode = args[0];
  if (isNaN(pikachucode)) return message.reply("Doğru ID girmelisiniz.");

  const pikachucodes =
    args.splice(1, args.length).join(" ") || `Sebep belirtilmemiş.`;

  message.guild
    .ban(pikachucode, pikachucodes + " | Yetkili: " + message.author.tag)
    .then(() => {
      message.channel.send(`\`${pikachucode}\`, Sebep: ${pikachucodes}`);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["idban"],
  permLevel: 2
};

exports.help = {
  name: "pikachucodeforceban",
  category: "pikachucode",
  description: "Pikachu Code‘a Aittir!",
  usage: "forceban "
};
