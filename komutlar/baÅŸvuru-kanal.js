const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');

exports.run = async (client, message, args) => {
//if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
     let bkanal1 = message.mentions.channels.first();
     if (!bkanal1) return message.channel.send('Başvuru kanalı ayarlamak için bir kanal etiketlemeniz gerekli. `+başvuru-kanal #kanal`')
    let i = await db.set(`support_${message.guild.id}`, message.mentions.channels.first().id)
    message.channel.send(` Başvuru kanalı, <#${i}> olarak ayarlandı.`)    
};
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
}

exports.help = {
    name: 'başvuru-kanal',
    description: 'Log kanalını belirler.',
    usage: 'gkanal <#kanal>'
}