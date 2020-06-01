const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, message, args) => {
//if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **yeterli izne sahip değilsin!**`);

  let reason = args.slice(1).join(' ')

if (!args[0]) return message.channel.send('Kimi uyaracağını yazmalısın.')
let user = message.mentions.users.first() || bot.users.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user

  if (!user) return message.channel.send('Kullanıcıyı bulamadım.')
  let member = message.guild.member(user)
  if (!member) return message.channel.send('Kullanıcıyı **bulamadım.**')
  if (member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(' Bu kişi **yetkili!**')
  if (!reason) return message.reply('Uyarı sebebini yazmalısın.').catch(console.error);
  
  message.channel.send(`**${user.tag}** adlı kullanıcıyı uyarmak istediğinize **emin misiniz?** Lütfen **evet (e)** veya **hayır (h)** ile cevap verin.\n\n\`30\` saniye içerisinde iptal edilcektir.`)
  let uwu = false;
  while (!uwu) {
      const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
      const choice = response.first().content
      if (choice == 'hayır' || choice == 'h') return message.channel.send('🚀 İşlem iptal **edildi.**')
      if (choice !== 'evet' && choice !== 'e') {
        message.channel.send('❓ Lütfen sadece **evet (e)** veya **hayır (h)** ile cevap verin.')
      }
    if (choice == 'evet' || choice == 'e') uwu = true
  }
  if (uwu) {
  let uyarı = await db.add(`uyarı.${user.id+message.guild.id}`, 1)
  message.channel.send(`**${user.tag}** Başarıyla **uyarıldı!**\nBu kullanıcının şuan **${db.get(`uyarı.${user.id+message.guild.id}`) || '0'}** uyarısı var.`)
  user.send(`**${message.guild.name}** adlı sunucudan **uyarı aldınız!**\n*Sebep:* \`\`\`${reason}\`\`\``)
  
  let embed = new Discord.RichEmbed()
  .setColor("#FFB900")
  .setAuthor(`${user.username} adlı kişi uyarıldı!`, user.avatarURL||user.defaultAvatarURL)
  .addField('Uyarılan Kullanıcı', `**${user.tag}** **[**\`${user.id}\`**]**`, true)
  .addField('Uyaran Yetkili', `**${message.author.tag}** **[**\`${message.author.id}\`**]**`, true)
  .addField('Uyarı Nedeni', reason, true)
  .addField('Uyarı Sayısı', db.get(`uyarı.${user.id+message.guild.id}`) || '0', true);
   let membermodChannel = await db.fetch(`membermodChannel_${message.guild.id}`)
    if (!message.guild.channels.get(membermodChannel)) return
    else message.guild.channels.get(membermodChannel).send(embed)
  } else return console.log('Hata var')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'uyar',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyar [kullanıcı] [sebep]'
};

/*  
  let user = message.mentions.users.first() || bot.users.get(args[0])
  if (!user) return message.channel.send('Kimi uyaracağını yazmalısın.')
  let member = message.guild.member(user)
  if (!member) return message.channel.send('kullanıcıyı **bulamadım.**')
  if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send(' Yetkilileri uyaramam.')
  if (!reason) reason = 'Neden belirtilmemiş.'
  
  try {
  await member.ban(reason + ` | Yetkili: ${message.author.tag} - ${message.author.id}`)
  
  message.channel.send(` **${user.tag}** Başarıyla **uyarıldı!**`)
  user.send(`**${message.guild.name}** adlı sunucuda **uyarıldınız!**\n*Sebep:* \`\`\`${reason}\`\`\``)

  let embed = new Discord.RichEmbed()
  .setColor("#FFB900")
  .setAuthor(`${user.username} adlı kişi uyarıldı!`, user.avatarURL||user.defaultAvatarURL)
  .addField('Uyarılan Kullanıcı', `**${user.tag}** **[**\`${user.id}\`**]**`, true)
  .addField('Uyaranan Yetkili', `**${message.author.tag}** **[**\`${message.author.id}\`**]**`, true)
  .addField('Uyarma Nedeni', reason, true);
   let membermodChannel = await db.fetch(`membermodChannel_${message.guild.id}`)
    if (!message.guild.channels.get(membermodChannel)) return
    else message.guild.channels.get(membermodChannel).send(embed)
  } catch(e) {
    message.channel.send('Bir hata **oluştu.**')
  }*/