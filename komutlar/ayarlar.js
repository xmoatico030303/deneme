

  const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Sadece herhangi bir sunucudan mesaj gönderebilirim.:relaxed: ')
    return message.author.sendEmbed(ozelmesajuyari); }




  const sayfa = [`**${message.guild.name} | Ayarları**
\n**Sunucu prefixi :** /
\n**Link engeli:** ${db.fetch(`reklamFiltre_${message.guild.id}`) ? `Açık ` : ` Kapalı ` }
\n**Küfür engeli:** ${db.fetch(`kufur_${message.guild.id}`) ? `Açık ` : ` Kapalı ` }
\n**Büyük harf engeli:** ${db.fetch(`capsEngel_${message.guild.id}`) ? `Açık ` : ` Ayarlanmamış ` }
\n**Otorol:** ${db.fetch(`autoRole_${message.guild.id}`) ? ` \`@${message.guild.roles.get(db.fetch(`autoRole_${message.guild.id}`)).name}\`` : ` Ayarlanmamış `}
\n**Otorol Kayıt Kanalı:** ${db.fetch(`otorolKanal_${message.guild.id}`) ? ` \`${message.guild.channels.get(db.fetch(`otorolKanal_${message.guild.id}`)).name}\` ` : ` Ayarlanmamış `}
\n**Sayaç kanalı:** ${db.fetch(`sayacKanal_${message.guild.id}`) ? ` \`${message.guild.channels.get(db.fetch(`sayacKanal_${message.guild.id}`)).name}\` `: ` Ayarlanmamış  `}
\n**Sayaç:** ${db.fetch(`sayacSayi_${message.guild.id}`) ?` \`${db.fetch(`sayacSayi_${message.guild.id}`)}\` ` : `Ayarlanmamış `}
\n**Giriş Çıkış kanalı:** ${db.fetch(`hgKanal_${message.guild.id}`) ? ` ${client.channels.get(db.fetch(`hgKanal_${message.guild.id}`))} `  : `Ayarlanmamış `}

  
`] 
  
  const ayarReis = new Discord.RichEmbed()
  .setColor(0x36393E)
  .setDescription(sayfa)
  .setTimestamp()
  
  message.channel.send(ayarReis)

 
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["settings",'sunucu-ayarları','sunucuayarları','sunucuayarı'],
    permLevel: 0,
    kategori: "sunucu",
  };
  
  exports.help = {
    name: 'ayarlar',
    description: 'Sunucu ayarlarını gösterir.',
    usage: 'ayarlar',
  };  