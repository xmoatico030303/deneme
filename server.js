
const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);
const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
const { promisify } = require('util')

client.config = require("./config.js")
client.logger = console
client.wait = promisify(setTimeout)
client.ayar = db

String.prototype.toProperCase = function() {
  return this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

process.on("uncaughtException", (err) => {
  const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
  console.error("Uncaught Exception: ", errorMsg);
  process.exit(1);
});

process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: ", err);
});
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
require('./util/eventLoader')(client);
const path = require('path');
const eco = require('discord-economy');
const request = require('request');


var prefix = ayarlar.prefix;


const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on("ready", () => {
  client.user.setGame(`c;komutlar c;help | c;davet | Yapımcı Casper Sama`, "");
        }, 
  console.log("Bağlandım!")
);






   

client.on("message", msg => {
    const kzgn = client.emojis.get("512302904141545509");
    const embedlul = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setDescription( msg.author + " Reklam Yasak Bunu Bilmiyormusun!")
    
const embedlulz = new Discord.RichEmbed()
    .setTitle("Sunucunda " + msg.author.tag + " reklam yapıyor!")
      .setColor(0x00AE86)
      .setDescription(";uyar <kişi> komutu ile onu uyarabilir ya da ?kick <kişi> veya ;ban <kişi> komutlarını kullanarak onu sunucudan uzaklaştırabilirsin!")
    .addField("Kullanıcının mesajı:", "**" + msg.content + "**")

if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/) (htpp)/g) && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
    if(msg.member.hasPermission('BAN_MEMBERS')){
    return;
    } else {
    msg.delete(30).then(deletedMsg => {
     deletedMsg.channel.send(embedlul)
     msg.guild.owner.send(embedlulz).catch(e => {
            console.error(e);
          });
        }).catch(e => {
          console.error(e);
        });
      };
      };
    })
;


const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyDAUOPf6TSMBjeudKhVb5eK89bSRLGeEXI');
const queue = new Map();

client.on('message', async msg => {

	if (msg.author.bot) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.toLowerCase().split(' ')[0];

	if (command === 'c;çal') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setColor('RANDOM')
    .setDescription('❎ | Lütfen Seli Bir Kanala Giriş Yapınız!'));
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('❎ | Lütfen Seli Bir Kanala Giriş Yapınız!'));
		}
		if (!permissions.has('SPEAK')) {
			 return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('❎ | Şarkıyı Çalamıyorum Bu Kanalda Konuşma Yetkim Yok!'));
        }

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			 return msg.channel.sendEmbed(new Discord.RichEmbed)
      .setTitle(`✅** | **${playlist.title}** Adlı Şarkı Kuyruğa Eklendi!**`)
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
          
				 msg.channel.sendEmbed(new Discord.RichEmbed()                  
         .setTitle('Şarkı Seçimi')
         .setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`)
         .setFooter('Lütfen 1-10 Arasında Bir Rakam Seçiniz 10 Saniye İçinde Liste İptal Edilecektir!')
	 .setFooter('Örnek Kullanım 1')
         .setColor('0x36393E'));
          msg.delete(5000)
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						 return msg.channel.sendEmbed(new Discord.RichEmbed()
            .setColor('0x36393E')
            .setDescription('❎ | **10 Saniye İçinde Şarkı Seçmediğiniz İçin seçim İptal Edilmiştir!**.'));
                    }
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.sendEmbed(new Discord.RichEmbed()
          .setColor('0x36393E')
          .setDescription('❎ | YouTubede Böyle Bir Şarkı Yok !**'));
                }
            }
			return handleVideo(video, msg, voiceChannel);
      
		}
	} else if (command === 'c;gir') {
		return new Promise((resolve, reject) => {
			const voiceChannel = msg.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('Kanalda Kimse Olmadığından Çıkıyorum!');
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
	} else if (command === 'c;geç') {
		if (!msg.member.voiceChannel) if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('❎ | Lütfen Seli Bir Kanala Giriş Yapınız!'));
		if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
     .setColor('RANDOM')
     .setTitle('❎ **Şu An Zaten Şarkı Çalmıyorum!'));                                              
		serverQueue.connection.dispatcher.end('**Sıradaki Şarkıya Geçildi!**');
		return undefined;
	} else if (command === 'durdur') {
		if (!msg.member.voiceChannel) if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('❎ | Lütfen Seli Bir Kanala Giriş Yapınız!'));
		if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
     .setColor('RANDOM')
     .setTitle('❎ | Şu An Zaten Şarkı Çalmıyorum!'));                                              
		msg.channel.send(`:stop_button: **${serverQueue.songs[0].title}** Adlı Şarkı Durduruldu`);
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('**Şarkı Bitti**');
		return undefined;
	} else if (command === 'c;ses') {
		if (!msg.member.voiceChannel) if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('❎ | Lütfen Seli Bir Kanala Giriş Yapınız!'));
		if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
     .setColor('RANDOM')
     .setTitle('❎ | Çalmayan Müziğin Sesine Bakamam'));                                              
		if (!args[1]) return msg.channel.sendEmbed(new Discord.RichEmbed()
   .setTitle(`:loud_sound: Şuanki Ses Seviyesi: **${serverQueue.volume}**`)
    .setColor('RANDOM'))
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle(`:loud_sound: Ses Seviyesi Ayarlanıyor: **${args[1]}**`)
    .setColor('RANDOM'));                             
	} else if (command === 'c;çalan') {
		if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle("❎ | Şu An Şarkı Çalınmıyor!")
    .setColor('RANDOM'));
		return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Çalan")                            
    .addField('Başlık', `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`, true)
    .addField("Süre", `${serverQueue.songs[0].durationm}:${serverQueue.songs[0].durations}`, true))
	} else if (command === 'c;sıra') {
    let index = 0;
		if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle("❎ | **Şarkı Kuyruğunda Şarkı Bulunmamakta**")
    .setColor('RANDOM'));
		  return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
     .setTitle('Şarkı Kuyruğu')
    .setDescription(`${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}`))
    .addField('Şu Anda Çalınan: ' + `${serverQueue.songs[0].title}`);
	} else if (command === 'c;duraklat') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setTitle("**:pause_button: Şarkı Durduruldu!**")
      .setColor('RANDOM'));
		}
		return msg.channel.send('❎ | **Şarkı Çalmıyor Şu An**');
	} else if (command === 'c;devam') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setTitle("**:arrow_forward: Şarkı Devam Ediyor!**")
      .setColor('RANDOM'));
		}
		return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle("**❎ | Şu An Şarkı Çalınmıyor!**")
    .setColor('RANDOM'));
	}
  

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    console.log(video);
    const song = {
        id: video.id,
        title: video.title,
        url: `https://www.youtube.com/watch?v=${video.id}`,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
        durations: video.duration.seconds,
    views: video.views,
    };
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`❎ | **Şarkı Sisteminde Problem Var Hata Nedeni: ${error}**`);
			queue.delete(msg.guild.id);
			return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setTitle(`❎ | **Şarkı Sisteminde Problem Var Hata Nedeni: ${error}**`)
      .setColor('RANDOM'))
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle(`✅ | **${song.title}** Adlı Şarkı Kuyruğa Eklendi!`)
    .setColor('RANDOM'))
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === '❎ | **Yayın Akış Hızı Yeterli Değil.**') console.log('Şarkı Bitti.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	 serverQueue.textChannel.sendEmbed(new Discord.RichEmbed()                                   
  .setTitle("**🎙 Şarkı Başladı**",`https://i.hizliresim.com/RDm4EZ.png`)
  .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
  .addField('\nBaşlık', `[${song.title}](${song.url})`, true)
  .addField("\nSes Seviyesi", `${serverQueue.volume}%`, true)
  .addField("Süre", `${song.durationm}:${song.durations}`, true)
  .setColor('RANDOM'));
}
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('**Aleyküm Selam,  Hoş Geldin!**'); 
		} else {
		msg.reply('Aleyküm selam, hoş geldin ^^');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selam') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('**Aleyküm Selam,  Hoş Geldin!**'); 
		} else {
		msg.reply('Aleyküm selam, hoş geldin ^^');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sea') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('**Aleyküm Selam,  Hoş Geldin!**'); 
		} else {
		msg.reply('Aleyküm selam, hoş geldin ^^');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('**Aleyküm Selam,  Hoş Geldin!**'); 
		} else {
		msg.reply('Aleyküm selam, hoş geldin ^^');
		}
	}
});

////////////////////////

client.on('guildMemberAdd', member => {
  let guild = member.guild;

  const channel = member.guild.channels.find('name', 'giriş-çıkış');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle(':inbox_tray: | Sunucuya katıldı!')
  .setTimestamp()
  channel.sendEmbed(embed); 
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'giriş-çıkış');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle(':outbox_tray: | Sunucudan ayrıldı')
  .setTimestamp()
  channel.sendEmbed(embed); 
});


////////////////////////

client.on("message", msg => {
  const uyarıembed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(":crown: " + msg.author + "Reklam Yapmayı Kes Seni Yetkililere Söyledim :angry: :rage: ")

const dmembed = new Discord.RichEmbed()
  .setTitle("Sunucunda " + msg.author.tag + " reklam yapıyor!")
    .setColor(0x00AE86)
    .setDescription(" " + msg.author.tag + " Sunucunda Reklam Yapıyor c;uar komutu ile kişiyi uyara bilir c;an Komutu İle Kişiyi Banlayabilirsin ")
  .addField("Kullanıcının mesajı:", "**" + msg.content + "**")

if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g) && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
  if(msg.member.hasPermission('BAN_MEMBERS')){
  return;
  } else {
  msg.delete(30).then(deletedMsg => {
   deletedMsg.channel.send(uyarıembed)
   msg.guild.owner.send(dmembed).catch(e => {
          console.error(e);
        });
      }).catch(e => {
        console.error(e);
      });
    };
    };
  })


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});



client.on("message", message => {
    const dmchannel = client.channels.find("name", "dm-log");
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        dmchannel.sendMessage("", {embed: {
            color: 3447003,
            title: `Bana Özelden Mesaj Atıldı`,
            description: `**Gönderen:** ${message.author.tag}\n\n**Gelen Mesaj:** ${message.content}`
        }})
    }
});

//Ŵα†søи.dll Tarafından Editlenmiştir.
client.on('guildCreate', guild => {
    let channel = client.channels.get("616589567465881635")
        const embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setAuthor(`Ailemize Bir Sunucu Eklendi.`)
        .setThumbnail(guild.iconURL)
        .setDescription(`Sunucu İsim; ${guild.name}\n\nSunucu Sahip; ${guild.owner}\n\nSunucu ID: ${guild.id}\n\nÜye Sayısı; ${guild.memberCount}\n\nKanal Sayısı; ${guild.channel.size}\n\n`)
         channel.send(embed);
    });

//Ŵα†søи.dll Tarafından Editlenmiştir.

client.on('guildDelete', guild => {
    let channel = client.channels.get("616589567465881635")
        const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor(`Aramızdan Bir Sunucu Eksildi.`)
        .setThumbnail(guild.iconURL)
        .setDescription(`Sunucu İsim; ${guild.name}\n\nSunucu Sahip; ${guild.owner}\n\nSunucu ID: ${guild.id}\n\nÜye Sayısı; ${guild.memberCount}\n\nKanal Sayısı; ${guild.channel.size}\n\n`)
         channel.send(embed);
    });

const economy = require('discord-eco');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  
  if(message.content === "c;bakiye") {
  economy.fetchBalance(message.author.id).then(i => {
  message.reply("Paranız: " + i.money + "TL")
  })
  }
  
  var d1 = Math.floor(Math.random() *5) + 25;
  var d2 = Math.floor(Math.random() *5) + 25;
  console.log(d1 + "," + d2)
  
  if(d1 === d2) {
  economy.updateBalance(message.author.id, d1).then(i => {
    
  })
  }
  

  
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
});   

client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Tebrikler, başarılı bir şekilde ${sayac[message.guild.id].sayi} kullanıcıya ulaştık!`)
                .setColor("0x808080")
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})
client.on("guildMemberRemove", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("RED")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: ${member.user.tag}, aramızdan ayrıldı, \**${sayac[member.guild.id].sayi}\** kişi olmamıza \**${sayac[member.guild.id].sayi - member.guild.memberCount}\** kişi kaldı!`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});
client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("GREEN")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: ${member.user.tag}, aramıza katıldı **${sayac[member.guild.id].sayi}** kişi olmamıza **${sayac[member.guild.id].sayi - member.guild.memberCount}** kişi kaldı!` );
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});



client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucukur") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
    message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('|▬▬|ÖNEMLİ KANALLAR|▬▬|', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])



        
 message.guild.createChannel('「📃」kurallar', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
 message.guild.createChannel('「🚪」gelen-giden', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
       message.guild.createChannel('「✅」sayaç', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
             message.guild.createChannel('「💾」log-kanalı', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
            message.guild.createChannel('「📢」duyuru-odası', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));

       }) 
       .then((collected) => {
        message.guild.createChannel('|▬▬|GENEL KANALLAR|▬▬|', 'category', [{
       id: message.guild.id,
     }]);
             
      message.guild.createChannel(`「💡」şikayet-ve-öneri`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「👥」pre-arama-odası`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「📷」görsel-içerik`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「🤖」bot-komutları`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「💬」sohbet`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));

      message.guild.createChannel(`🏆》Kurucu Odası`, "voice")
      .then(channel =>
        channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
      .then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        let role2 = message.guild.roles.find("name", "Kurucu");
        
        c.overwritePermissions(role, {
            CONNECT: false,
        });
        c.overwritePermissions(role2, {
            CONNECT: true,
            
        });
    })

    message.guild.createChannel('|▬▬|SES KANALLARI|▬▬|', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🏆》Yönetici Odası`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "Kurucu");
      let role3 = message.guild.roles.find("name", "Yönetici");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
  })

  message.guild.createChannel(`💬》Sohbet Odası`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})

message.guild.createChannel('|▬▬|OYUN ODALARI|▬▬|', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🎮》LOL`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》ZULA`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》COUNTER STRİKE`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》PUBG`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
  message.guild.createChannel(`🎮》FORTNİTE`, 'voice')
  .then(channel =>
   channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
   message.guild.createChannel(`🎮》MİNECRAFT`, 'voice')
   .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
    message.guild.createChannel(`🎮》ROBLOX`, 'voice')
    .then(channel =>
     channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
     message.guild.createChannel(`🎮》WOLFTEAM`, 'voice')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))



      message.guild.createRole({
        name: 'Kurucu',
        color: 'RED',
        permissions: [
            "ADMINISTRATOR",
    ]
      })

      
      message.guild.createRole({
        name: 'Yönetici',
        color: 'BLUE',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })

      message.guild.createRole({
        name: 'Moderatör',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.createRole({
        name: 'V.I.P',
        color: '00ffff',
      })

      message.guild.createRole({
        name: 'Üye',
        color: 'WHITE',
      })

      message.guild.createRole({
        name: 'Bot',
        color: 'ORANGE',
      })

       message.channel.send("Gerekli Odalar Kuruldu!")
     
            })   
    
}
});

client.on('message', message => {
  if (message.content.startsWith("c;virüs")) {
      if(!message.author.id === '') return;
    if (message.author.bot) return
         message.delete();
           let args = message.content.split(' ').slice(1);

                 let virusname = args.join('Aktarma işlemi, iptal edildi!');
               if (virusname < 1) {
                   return message.channel.send("Lütfen, bir isim belirtiniz!");
               }
               message.channel.send({embed: new Discord.RichEmbed().setTitle(virusname + " hazırlanmakta!").setColor(0x808080)}).then(function(m) {
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 1%').setColor(0x808080)})
           }, 1000)
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 2%').setColor(0x808080)})
           }, 2000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 3%').setColor(0x808080)})
           }, 3000)
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 4%').setColor(0x808080)})
           }, 4000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 28%').setColor(0x808080)})
           }, 5000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 35%').setColor(0x808080)})
           }, 6000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 78%').setColor(0x808080)})
           }, 7000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 80%').setColor(0x808080)})
           }, 8000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 86%').setColor(0x808080)})
           }, 9000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 89%').setColor(0x808080)})
           }, 10000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 90%').setColor(0x808080)})
           }, 11000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 95%').setColor(0x808080)})
           }, 12000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 96%').setColor(0x808080)})
           }, 13000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 97%').setColor(0x808080)})
           }, 14000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor 98%').setColor(0x808080)})
           }, 15000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 99%').setColor(0x808080)})
           }, 16000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 100%').setColor(0x808080)})
           }, 17000)
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs için aktarma işlemi başlatılıyor!').setColor(0x808080)})
           }, 18000)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs için dosyalar hazırlanıyor!').setColor(0x808080)})
           }, 19000)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('Dosya, aktarılıyor: ' + virusname + ".exe").setColor(0x808080)})
           }, 2200)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 5sn.').setColor(0x808080)})
           }, 2500)
             setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 4sn.').setColor(0x808080)})
           }, 2600)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 3sn.').setColor(0x808080)})
           }, 2700)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 2sn.').setColor(0x808080)})
           }, 2800)
              setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 1sn.').setColor(0x808080)})
           }, 2900)
           setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('Virüs, ekleniyor!').setColor(0x808080)})
         }, 3000)
            setTimeout(function() {
             m.edit({embed: new Discord.RichEmbed().setTitle('Virüs, eklendi!').setColor(0x808080)})
         }, 3100)
            setTimeout(function() {
             m.delete()
         }, 3200)
           setTimeout(function() {
             message.channel.send('**Virüs, sızdırıldı!**')
         }, 3300)
            setTimeout(function() {
           message.channel.send('**Sunucuya Sızılıyor...!**')
         }, 3300)
          setTimeout(function() {
            message.channel.send('**Sunucu Bilgileri Ele Geçirildi...**')
          }, 9999)

         setTimeout(function() {
           message.channel.send('**Sunucu Üyelerinin Bilgileri Ele Geçiriliyor...**')
         }, 9999)

        setTimeout(function() {
          message.channel.send('**Üye Bilgileri Ele Geçirildi...**')
        }, 9999)

       setTimeout(function() {
         message.channel.send('**Üyelerin İP Adresi Alınıyor...**')
       }, 9999)

      setTimeout(function() {
        message.channel.send('**Sistemlerine Sızılıyor**')
      }, 9999)

     setTimeout(function() {
       message.channel.send('**Sisteme Sızıldı...**')
     }, 9999)

    setTimeout(function() {
      message.channel.send('**Bilgiler Pays a Atılıyor...**')
    }, 9999)

   setTimeout(function() {
     message.channel.send('**Bilgiler Atıldı...**')
   }, 9999)
                 
   setTimeout(function() {
     message.channel.send('**Şakalandın hahahaha**')
   }, 9999)
  })
       }
});

client.on("guildCreate", guild => {
let add = client.channels.get("617686840668848158")
const eklendim = new Discord.RichEmbed()

.setTitle(`Sunucuya Eklendim`)
.setTimestamp()
.setColor("GREEN")
.setThumbnail(guild.iconURL)
.addField(`Sunucu İsmi`,guild.name)
.addField(`Sunucu ID`, guild.id)
.addField(`Kurucu`,guild.owner.user.tag)
.addField(`Kurucu ID`,guild.owner.user.id)
.addField(`Üye Sayısı`,guild.memberCount)

add.send(eklendim)

});
//XiR
client.on("guildDelete", guild => {
let remove = client.channels.get("617686840668848158")
const atildim = new Discord.RichEmbed()

.setTitle(`Sunucudan Atıldım`)
.setTimestamp()
.setColor("RED")
.setThumbnail(guild.iconURL)
.addField(`Sunucu İsmi`,guild.name)
.addField(`Sunucu ID`, guild.id)
.addField(`Kurucu`,guild.owner.user.tag)
.addField(`Kurucu ID`,guild.owner.user.id)
.addField(`Üye Sayısı`,guild.memberCount)

remove.send(atildim)

});
client.on("guildMemberAdd", async member => {
  db.fetch('botkoruma_' + member.guild.id).then(a => {
  if(a !== "aktif") return;
  setTimeout(() => {
   member.guild.fetchMember(member).then(a => {
   a.roles.forEach(function(orospu) {
   if(orospu.name.includes(member.user.username)) {
   member.guild.member(member).ban();
   member.guild.channels.find(x => x.name === "bot-koruma").send('__**Devotion Koruma Sistemi**__ \n@everyone Sunucuya Bot Çekmeye Çalıştıklarını Bildirmek İstedim. \n__**Atılan Bot :**__ ' + member.user.tag)
}})})
  }, 1000)
})
})

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() ===  'c!botpaneli') {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('Bot Kullanımı', 'category', [{
  id: message.guild.id,
  deny: ['CONNECT']
}])



        
 message.guild.createChannel(`Bellek Kullanımı: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, 'voice', [{
  id: message.guild.id,
  deny: ['CONNECT']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
 message.guild.createChannel(`Sunucular: ${client.guilds.size.toLocaleString()}`, 'voice', [{
  id: message.guild.id,
  deny: ['CONNECT']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
       message.guild.createChannel(`Toplam Kanal: ${client.channels.size.toLocaleString()}`, 'voice', [{
        id: message.guild.id,
        deny: ['CONNECT']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
             message.guild.createChannel(`Ping: ${client.ping}`, 'voice', [{
              id: message.guild.id,
              deny: ['CONNECT']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
            message.guild.createChannel('Yapımcım: Emirhan Saraç', 'voice', [{
              id: message.guild.id,
              deny: ['CONNECT']
            }])
            .then(channel =>
              channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
             message.guild.createChannel(`Kütüphanesi: Discord.js`, 'voice')
            
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
        message.channel.send('Bot Bilgi Panelini Oluturdum');
                 })   
    
}
});



/////////otorol/////////////

client.on("guildMemberAdd", async member => {
let kanal = await db.fetch(`otok_${member.guild.id}`)  
let rol = await db.fetch(`otorol_${member.guild.id}`)   
let mesaj =  db.fetch(`otomesaj_${member.guild.id}`)  
if(!kanal) return

if(!mesaj) {
  
  client.channels.get(kanal).send(':loudspeaker: :inbox_tray: Otomatik Rol Verildi Seninle Beraber `'+member.guild.memberCount+'` Kişiyiz! Hoşgeldin! `'+member.user.username+'`')
member.addRole(rol)
  return
}

if(mesaj) {
  var mesajs = await db.fetch(`otomesaj_${member.guild.id}`).replace("-uye-", `${member.user.tag}`).replace("-rol-", `${member.guild.roles.get(rol).name}`).replace("-server-", `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-botsayisi-", `${member.guild.members.filter(m => m.user.bot).size}`).replace("-bolge-", `${member.guild.region}`).replace("-kanalsayisi-", `${member.guild.channels.size}`)
  member.addRole(rol)
  client.channels.get(kanal).send(mesajs)

//CodEming /Yasin..
}  
  
});
////////////otorol son ////////////////////////////////////////

client.on("message", async msg => {
  
  if (msg.channel.type === "dm") return;
  if(msg.author.bot) return;  
  
  if (msg.content.length > 7) {
    
    db.add(`puan_${msg.author.id + msg.guild.id}`, 3)
};

  if (db.fetch(`puan_${msg.author.id + msg.guild.id}`) > 150) {
    
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)
    
    db.delete(`puan_${msg.author.id + msg.guild.id}`)
    
  };
  
});

client.on("message", async msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
        
    let i = await db.fetch(`reklamFiltre_${msg.guild.id}`)  
          if (i == 'acik') {
              const reklam = ["discord.app", "discord.gg", "invite","discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_GUILD")) {
                    msg.delete();                    
                    let embed = new Discord.RichEmbed()
                    .setColor(0xffa300)
                    .setFooter('Gnarge Blocker s  Reklam engellendi.', client.user.avatarURL)
                    .setAuthor(msg.guild.owner.user.username, msg.guild.owner.user.avatarURL)
                    .setDescription("Casper Reklam sistemi, " + `***${msg.guild.name}***` + " adlı sunucunuzda reklam yakaladım.")
                    .addField('Reklamı yapan kişi', 'Kullanıcı: '+ msg.author.tag +'\nID: '+ msg.author.id, true)
                    .addField('Engellenen mesaj', msg.content, true)
                    .setTimestamp()                   
                    msg.guild.owner.user.send(embed)                       
                    return msg.channel.send(`${msg.author.tag}, Reklam Yapmak Yasak Dostum!`).then(msg => msg.delete(25000));
                  }              
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!i) return;
          });
client.on('message', async message => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  let kullanıcı = message.mentions.users.first() || message.author
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`)
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`)
  let sebep = afkkullanıcı
 
  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;
  
  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(`\`${message.author.tag}\` adlı kullanıcı artık AFK değil.`)
      db.delete(`afk_${message.author.id}`)
    }
    if (afkkullanıcı) return message.channel.send(`${message.author}\`${kullanıcı.tag}\` şu anda AFK. Sebep : \`${sebep}\``)
  }

  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(`\`${message.author.tag}\` adlı kullanıcı artık AFK değil.`)
      db.delete(`afk_${message.author.id}`)
    }
  }
});
const { RichEmbed } = require ('discord.js')

client.on('message', Mesaj => {
  
  var küfürEngel = require('quick.db').fetch(`küfürEngel_${Mesaj.guild.id}`)
  if (küfürEngel == 'Açık') {
    var Bot = client
  
    var küfürEtme = new RichEmbed ()
    .setColor ('#480000')
    .setAuthor (`${Mesaj.author.tag} küfür etti!`, Mesaj.author.displayAvatarURL)
    .setDescription (`**<@${Mesaj.author.id}>, burada ben varken küfür edemezsin!**\n\n**Küfür ettiğin için hesabına __3__ uyarı ekledim.**`)
    .setFooter (Bot.user.username, Bot.user.displayAvatarURL)
    .setTimestamp ()
  
    var küfürListesi = ['aq', 'amk', 'sg', 'sik', 'anan', 'oç', 'o rus bu', 'orusbu', 'orospu', 'sege'] // Daha fazla küfür ekleyebilirsiniz.
  
    for (
      var Küfür = 0; Küfür < küfürListesi.length; Küfür++
    ) {
      if (Mesaj.content.includes(küfürListesi[Küfür])) {
        Mesaj.delete()
        Mesaj.channel.send (küfürEtme)
        break
      }
    }
  }
})


client.on('message', async message => {
  let ke = await db.fetch(`kufur_${message.guild.id}`)
  
  if (ke === "kapali" || ke === undefined || ke === null){
    return;
  } else if (ke === "acik") {
    let küfür = ["amk", "amcık", "yarrak", "sik", "amına koyduğum", "kaltak", "yavşak", "orospu", "piç", "ananı sikim", "sikik", "göt", "pezevenk", "gavat", "meme"]
    if (küfür.some(word => message.content.includes(word))){
        if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
        message.channel.send("Kurucuya gönderdim!!! Bir daha küfür etme!")
        message.guild.owner.send("Sunucunuzda bir kişi küfür etti. \nKullanıcı: "+ message.author.tag +" \nMesaj: **"+ message +"** ")
      }
    }
    
  }
})



client.on('guildMemberAdd',async member => {
  let user = client.users.get(member.id);
  let chan = client.channels.get(db.fetch(`guvenlik${member.guild.id}`)) 
       const Canvas = require('canvas')
       const canvas = Canvas.createCanvas(360,100);
       const ctx = canvas.getContext('2d');
  
  const resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614151181752860672/yhosgeldirrn.png')
    const resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164419768877056/yhosgeldirrn.png')
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment.duration(kurulus).format("D")   
    var kontrol;
      if (kurulus > 2629800000) kontrol = resim2
    if (kurulus < 2629800000) kontrol = resim1

       const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164413318168606/Adsz.png');
       ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   


  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
  ctx.beginPath();
	ctx.lineWidth = 4;
  ctx.fill()
	ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
	ctx.clip();
  ctx.drawImage(avatar, 143,10, 73, 72  );

   
       const attachment = new Discord.Attachment(canvas.toBuffer(), 'STARKs-güvenlik.png');
    chan.send(attachment)
});

//----------------------------------CAPSLOCK ENGELLEME-----------------------------//  
client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return;  
        if (msg.content.length > 4) {
         if (db.fetch(`capslock_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
                 msg.delete()
                 return msg.channel.send(`✋ ${msg.author}, Bu sunucuda, büyük harf kullanımı engellenmekte!`).then(m => m.delete(5000))
     }
       }
     }
   }
  }
});

//----------------------------------CAPSLOCK ENGELLEME SON-----------------------------//  

//----------------------------------TAG-----------------------------// 

client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`tag_${member.guild.id}`);
  let tagyazi;
  if (tag == null) tagyazi = member.setNickname(`${member.user.username}`)
  else tagyazi = member.setNickname(`${tag} | ${member.user.username}`)
});

//----------------------------------TAG SON-----------------------------// 



//----------------------------------oynuyor----------------------------// 
const activities_list = [
    "c;help👻 c;yardım👻", // Sadece Tırnak Yani " İşareti İçinde Yazmakta Olan Mesajları Değiştirin.
    "c;davet yazarak botumuzu davet edebilrsin", // Sadece Tırnak Yani " İşareti İçinde Yazmakta Olan Mesajları Değiştirin.
    "c;help👻 c;yardım👻", // Sadece Tırnak Yani " İşareti İçinde Yazmakta Olan Mesajları Değiştirin.
    
    ]; 
client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // Bu Kısımları Ellemeyin
        client.user.setActivity(activities_list[index]); // Bu Kısımları Ellemeyin.
    }, 10000); // Selam 1 Saniye = 1000 MiliSaniye Yapar - Kısacası Böyle Bırakırsan - 3 Saniyede 1 Değişir. 
});
//----------------------------------oynuyor SON----------------------------// 





//------------------------------ reklamkick ------------------------------\\

client.on ('message', Mesaj => {

  if (Mesaj.content == `${ayarlar.prefix}aşkölçer`) {
    
    const Bot = client
    
    const sonuçListesi = [
      '**En iyisi, sen bu işi boşver kanka.**\n:heart:🖤🖤🖤🖤🖤🖤🖤',
      '**Kanka, zor ya...**\n:heart::heart:🖤🖤🖤🖤🖤🖤',
      '**Bilmiyorum ki... Olabilir de, olmayabilir de...**\n:heart::heart::heart:🖤🖤🖤🖤🖤',
      '**Olabilir...**\n:heart::heart::heart::heart:🖤🖤🖤🖤',
      '**İhtimali var kanka..**\n:heart::heart::heart::heart::heart:🖤🖤🖤',
      '**Denemeye değer.**\n:heart::heart::heart::heart::heart::heart:🖤🖤',
      '**Bir şeyler var..**\n:heart::heart::heart::heart::heart::heart::heart:🖤',
      '**OTOBÜS MÜ BEKLİYON HADİ GİT AÇIL LA**\n:heart::heart::heart::heart::heart::heart::heart:' // Yazıları artırırsanız "var rakamSonuç"ta sondaki çarpı miktarını da azaltmanız gerekir.
    ]
    
    const Sonuç = Math.floor (Math.random () * (sonuçListesi.length - 1))
    
    var rakamSonuç = (Sonuç + 1) * 12.5
    
    const aşkÖlçer = new RichEmbed ().setColor ('#ff005f').setDescription (`**${Mesaj.mentions.users.first()} ile arandaki aşk sonucu:** ${rakamSonuç}%\n\n${sonuçListesi[Sonuç]}`)
    const kullanıcıYok = new RichEmbed ().setColor ('#c70000').setThumbnail (Bot.user.avatarURL).setTitle ('Aşkı ölçmek için birisini girmelisin!').setFooter (Bot.user.username, Bot.user.avatarURL).setTimestamp ()
    const kullanıcıSensin = new RichEmbed ().setColor ('#c70000').setThumbnail (Bot.user.avatarURL).setTitle ('Kendinle kendin arandaki aşkı ölçemezsin.').setFooter (Bot.user.username, Bot.user.avatarURL).setTimestamp ()
    
    if (!Mesaj.mentions.users.first()) Mesaj.channel.send (kullanıcıYok)
    if (Mesaj.mentions.users.first() == Mesaj.author) Mesaj.channel.send (kullanıcıSensin)
    if (Mesaj.mentions.users.first()) if (Mesaj.mentions.users.first() !== Mesaj.author) Mesaj.channel.send (aşkÖlçer)
  }
})
client.on("guildCreate", guild => {
let add = client.channels.get("617686840668848158")
const eklendim = new Discord.RichEmbed()

.setTitle(`Sunucuya Eklendim`)
.setTimestamp()
.setColor("GREEN")
.setThumbnail(guild.iconURL)
.addField(`Sunucu İsmi`,guild.name)
.addField(`Sunucu ID`, guild.id)
.addField(`Kurucu`,guild.owner.user.tag)
.addField(`Kurucu ID`,guild.owner.user.id)
.addField(`Üye Sayısı`,guild.memberCount)

add.send(eklendim)

});
//XiR
client.on("guildDelete", guild => {
let remove = client.channels.get("617686840668848158")
const atildim = new Discord.RichEmbed()

.setTitle(`Sunucudan Atıldım`)
.setTimestamp()
.setColor("RED")
.setThumbnail(guild.iconURL)
.addField(`Sunucu İsmi`,guild.name)
.addField(`Sunucu ID`, guild.id)
.addField(`Kurucu`,guild.owner.user.tag)
.addField(`Kurucu ID`,guild.owner.user.id)
.addField(`Üye Sayısı`,guild.memberCount)

remove.send(atildim)

});
//XiR


client.on('ready', () => {
  const moment = require("moment");
require("moment-duration-format");

 setInterval(() => {
const calismasure = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
let botdurum = client.channels.find(c => c.id === '617833148293578755')//Botun sürekli mesaj atacağı kanal.
const botistatistik = new Discord.RichEmbed()
    .setColor('RED')
    .setTitle('= Bot İstatistikleri =')
    
.addField(`RAM`,`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/512mb`)
.addField(`Çalışma Süresi`,`${calismasure}`)
.addField(`Ping`,`${client.ping}`)
.addField(`discord.js`,`v${Discord.version}`)
.addField(`Bilgi`,`${client.guilds.size.toLocaleString()} sunucu ve ${client.users.array().length} kullanıcıya hizmet veriyor.`)
.setTimestamp()
botdurum.send(botistatistik);
  }, 3600000); //Milisaniye cinsinden. 1 saniye =  1000 milisaniye. Örnek Olarak 1 saat = 3600000milisaniye
});
//------------------------------ Sunucu isimleri ------------------------------\\
client.on('ready',function(){
  console.log('Bulunduğum Sunucular:')
  let sunucular = Array.from(client.guilds.keys())
  for(var i=0; i<sunucular.length; i++){
    console.log(`>\t${client.guilds.get(sunucular[i]).name}`)
  }
})
//------------------------------ sunucu isimleri son ------------------------------\\


client.on('guildMemberAdd',async member => {
 const guild = member.guild
     
      const kanalcık =  db.fetch(`botPanel_${member.guild.id}`)
    if (kanalcık) {
      const kanal = guild.channels.find('id', kanalcık)
      if (!kanal) return db.delete(`botPanel_${guild.id}`)
      kanal.setName(`Sunucudaki üye sayısı : ${guild.memberCount}`)
    }
})

client.on('guildMemberRemove',async member => {
 const guild = member.guild
    
 
      const kanalcık =  db.fetch(`botPanel_${member.guild.id}`)
    if (kanalcık) {
      const kanal = guild.channels.find('id', kanalcık)
      if (!kanal) return db.delete(`botPanel_${guild.id}`)
      kanal.setName(`Sunucudaki üye sayısı : ${guild.memberCount}`)
    }
})
client.on("message", async message => {
  
  if(message.content.startsWith(prefix)) return;
  if(message.author.bot) return;
  
  var id = message.author.id;
  var gid = message.guild.id;
  
  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);
  
  
  if(!lvl) {
    
    db.set(`xp_${id}_${gid}`, 5);
    db.set(`lvl_${id}_${gid}`, 1);
    db.set(`xpToLvl_${id}_${gid}`, 100);
    
  } else {
    
    var random = Math.random() * (8 - 3) + 3;
    db.add(`xp_${id}_${gid}`, random.toFixed());
    console.log(xp);
    
    if(xp > xpToLvl) {
      
      db.add(`lvl_${id}_${gid}`, 1);
      db.add(`xpToLvl_${id}_${gid}`, await db.fetch(`lvl_${id}_${gid}`) * 100);
      var lvl = await db.fetch(`lvl_${id}_${gid}`);
      message.channel.send("Tebrikler, " + message.author + ". Seviye atladın! Yeni seviyen: **" + lvl + "**");
      var role = message.guild.roles.get(await db.fetch(`role_${gid}_${lvl}seviye`));
      if(!role) return;
      else {
        message.member.addRole(role);
        message.channel.send("Tebrikler! **" + lvl + "** seviye olarak @" + role.name + " rolünü kazandınız.");
      }
      
    }
    
  }
  
  
  
});


client.on("message", async message => {
    let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
    let reklamkick = await db.fetch(`reklamkick_${message.guild.id}`)
    let kullanici = message.member;
    if (reklamkick == 'kapali') return;
    if (reklamkick == 'acik') {
        const reklam = ["discord.app", "discord.gg", "invite", "discordapp", "discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
        if (reklam.some(word => message.content.toLowerCase().includes(word))) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                message.delete();
                db.add(`reklamuyari_${message.author.id}`, 1) //uyarı puanı ekleme
                if (uyarisayisi === null) {
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (1/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)                
}
                if (uyarisayisi === 1) {
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (2/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 2) {
                    message.delete();
                    await kullanici.kick({
                        reason: `Reklam kick sistemi`,
                    })
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> 3 adet reklam uyarısı aldığı için kicklendi. Bir kez daha yaparsa banlanacakç`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 3) {
                    message.delete();
                    await kullanici.ban({
                        reason: `Reklam ban sistemi`,
                    })
                    db.delete(`reklamuyari_${message.author.id}`)
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> kick yedikten sonra tekrar devam ettiği için banlandı.`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }

            }
        }
    }
});

//------------------------------ reklamkick son ------------------------------\\

//------------------------------ raidkoruması ------------------------------\\

const botadibotkoruma = "Casper"
client.on('guildMemberAdd', (member, msg) => {
  const message = member
  let krma = db.get(`botkoruma_${message.guild.id}`)
  if(!krma) return false;
  if(krma) {
    if(krma === "botkorumaaktifysfdızolarınamk") {
    const guild = member.guild;
  let sChannel = member.guild.channels.find(c => c.name === 'bot-koruma')

    if(member.user.bot !==true){

    } 
    else {

    sChannel.send(`**${botadibotkoruma} Bot Koruma Sistemi**
Sunucuya Bir Bot Eklendi Ve Güvenlik Nedeniyle Banlandı
Banlanan Bot: **${member.user.tag}**
@everyone :warning: `)
    .then(() => console.log(`yasaklandı ${member.displayName}`))
    .catch(console.error);
      member.ban(member)
    }
    } else return false;
    } else return false;
});
//------------------------------ raidkoruması ------------------------------\\



module.exports = async member => {
  
  let rolk = await db.fetch(`rolK_${member.guild.id}`);
  let rolk2 = member.guild.channels.find('id', rolk)
  let rol = await db.fetch(`otorol_${member.guild.id}`);
  let rol2 = member.guild.roles.find('id', rol);
  let botrol = await db.fetch(`bototorol_${member.guild.id}`);
  let botrol2 = member.guild.roles.find('id', botrol);
  if (!rolk) return;
  if (!rolk2) return;
  if (!rol) return;
  if (!rol2) return;
  
  if (!botrol) {
    member.addRole(rol2)
    rolk2.send(`\`${member.user.tag}\` adlı kullanıcıya \`${rol2.name}\` rolü verildi.`)
  }
  
  if (botrol) {
    if (member.user.bot) {
      member.addRole(botrol2)
      member.removeRole(rol2)
      rolk2.send(`\`${member.user.tag}\` adlı bota \`${botrol2.name}\` rolü verildi.`)
    }
    if (!member.user.bot) {
      member.addRole(rol2)
      rolk2.send(`\`${member.user.tag}\` adlı kullanıcıya \`${rol2.name}\` rolü verildi.`)
    }
  }
};


client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "stattemizle") {
  if (!message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")) return message.channel.send(" İstatistik ayarlanmamış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
      const a = message.guild.channels.find(channel => channel.name === "Sunucu İstatistik").delete()
      if(!a) return console.log("guildStats")
      const b = message.guild.channels.find(channel => channel.name === `Nezle | Toplam Üye • ${message.guild.memberCount}`).delete()
      if(!b) return console.log("guildStatsMember")
      const c = message.guild.channels.find(channel => channel.name === `Nezle | Botlar • ${message.guild.members.filter(m => m.user.bot).size}`).delete()
      if(!c) return console.log("guildStatsBot")
      const d = message.guild.channels.find(channel => channel.name === `Nezle | Kanal sayısı • ${message.guild.channels.size}`).delete() //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
      if(!d) return console.log("guildStatsChannel")
      message.channel.send(" Kanallar temizlendi.")
    }
  if (command === "statayarla") {
  if (message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")) return message.channel.send(" Zaten istatistik ayarlanmış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
  message.channel.send(`Kategori ve kanal kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('Sunucu İstatistik', 'category', [{
  id: message.guild.id,
  deny: ['CONNECT'],
  deny: ['VIEW_CHANNEL']
}]);

 message.guild.createChannel(`Üye sayısı: ${message.guild.memberCount}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")));
 message.guild.createChannel(`Bot sayısı: ${message.guild.members.filter(m => m.user.bot).size}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")));
message.guild.createChannel(`Kanal sayısı: ${message.guild.channels.size}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")));
  message.channel.send(" Sunucu paneli ayarlandı!")
        })
}
});

client.on("message", msg => {
  
  //------------------------------ küfürengel------------------------------\\

 var kufur = db.fetch(`kufur_${msg.guild.id}`)
    if (kufur == 'acik') {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();

                  return msg.reply('Küfür etmemelisin! ⚠').then(msg => msg.delete(3000));
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    else if (kufur == 'kapali') {
      
    }
    if (!kufur) return;
  });
    //------------------------------ küfürengel------------------------------\\
  //------------------------------ spamengel------------------------------\\

const antispam = require("discord-anti-spam-tr");

let spamEngel = JSON.parse(fs.readFileSync("././ayarlar/spamEngelle.json", "utf8"));

client.on("message", msg => {
  if (!msg.guild) return;
  if (!spamEngel[msg.guild.id]) return;
  if (spamEngel[msg.guild.id].spamEngel === 'kapali') return;
    if (spamEngel[msg.guild.id].spamEngel=== 'acik') {

//istediğiniz yere ekleyin bot.js de
antispam(client, {
  uyarmaSınırı: 8, //Uyarılmadan önce aralıkta gönderilmesine izin verilen maksimum mesaj miktarı.
  banlamaSınırı: 15, //Yasaklanmadan önce aralıkta gönderilmesine izin verilen maksimum ileti miktar.
  aralık: 200000, // ms kullanıcılarda zaman miktarı, yasaklanmadan önce aralık değişkeninin maksimumunu gönderebilir.
  // Uyarı mesajı, kullanıcıya hızlı gideceklerini belirten kullanıcıya gönderilir..
   //Yasak mesaj, yasaklanmış kullanıcıyı ,Banlar
  maxSpamUyarı: 5,//Bir kullanıcının uyarılmadan önce bir zaman dilimi içinde gönderebileceği maksimum kopya sayısı
  maxSpamBan: 10, //Bir kullanıcının yasaklanmadan önce bir zaman diliminde gönderebildiği maksimum kopya sayısı
  zaman: 7, // Spamdan sonraki zaman
  rolİsimi: "spam-susturulmuş" // Spam Atan Kullanıcılar Verilecek Röl

});
    }
})
   
  //------------------------------ spamengel------------------------------\\

 //------------------------------ spamengel------------------------------\\


client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 600000//süresini dilediğiniz gibi kısaltabilirsiniz.
let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
let i = ayarlar.sahip
          if (msg.author.id == i) {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`goldzzz_${msg.author.id}`, Date.now());
  var embed = new Discord.RichEmbed()
  .setAuthor(`Sahibim ${msg.author.username}`,`${msg.author.avatarURL || msg.author.displayAvatarURL}`)
  .setDescription(`:partner: Sahibim Belirdi = <@{msg.author.id}>`)
  .setColor("BLUE")
   msg.channel.send(embed)
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});



 //------------------------------ spamengel------------------------------\\


client.on('message', async message => {
const ms = require('ms');
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let u = message.mentions.users.first() || message.author;
if (command === "sunucu-kursana") {
if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 10000,
errors: ['time'],
})


.then((collected) => {
message.guild.createChannel('📜│Bilgilendirme.', 'category', [{
id: message.guild.id,
deny: ['SEND_MESSAGES']
}])




message.guild.createChannel('📌│кυяαllαя', 'text', [{
id: message.guild.id,
deny: ['SEND_MESSAGES']
}])
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "📜│Bilgilendirme.")));
message.guild.createChannel('🍺│gıяıѕ-çıкıѕ', 'text', [{
id: message.guild.id,
deny: ['SEND_MESSAGES']
}])
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "📜│Bilgilendirme.")));
message.guild.createChannel('💥│ѕαчαç', 'text', [{
id: message.guild.id,
deny: ['SEND_MESSAGES']
}])
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "📜│Bilgilendirme.")));
message.guild.createChannel('📊│αикεт', 'text', [{
id: message.guild.id,
deny: ['SEND_MESSAGES']
}])
.then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "📜│Bilgilendirme.")));
message.guild.createChannel('📣│dυчυяυlαя', 'text', [{
id: message.guild.id,
deny: ['SEND_MESSAGES']
}])
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "📜│Bilgilendirme.")));

})
.then((collected) => {
message.guild.createChannel('⚡│Ana. Kanallar.', 'category', [{
id: message.guild.id,
}]);

message.guild.createChannel(`🌺│тαvsıyε`, 'text')
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "⚡│Ana. Kanallar.")));
message.guild.createChannel(`🌙│σzlu-ѕσzlεя`, 'text')
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "⚡│Ana. Kanallar.")));
message.guild.createChannel(`📷│fσтσğяαflαя`, 'text')
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "⚡│Ana. Kanallar.")));
message.guild.createChannel(`🤖│вσт-кσмυтlαяı`, 'text')
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "⚡│Ana. Kanallar.")));
message.guild.createChannel(`💭│gεиεl-ѕσнвεт`, 'text')
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "⚡│Ana. Kanallar.")));

message.guild.createChannel(`✯ │ŁØRÐ. &`, "voice")
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "🏆 │ Yetkili Katı")))
.then(c => {
let role = message.guild.roles.find("name", "@everyone");
let role2 = message.guild.roles.find("name", "⍫ Kurucu 🌹");

c.overwritePermissions(role, {
CONNECT: true,
});
c.overwritePermissions(role2, {
CONNECT: true,

});
})

message.guild.createChannel('🏆 │ Yetkili Katı', 'category', [{
id: message.guild.id,
}]);

message.guild.createChannel(`💮│Kâptân. &`, "voice")
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "🏆 │ Yetkili Katı")))
.then(c => {
let role = message.guild.roles.find("name", "@everyone");
let role2 = message.guild.roles.find("name", "⍫ Kurucu 🌹");
let role3 = message.guild.roles.find("name", "⍫ Yonetici 🌹");
c.overwritePermissions(role, {
CONNECT: true,
});
c.overwritePermissions(role2, {
CONNECT: true,
});
c.overwritePermissions(role3, {
CONNECT: true,
});
})

message.guild.createChannel(`⭐│Sohbet. †`, "voice")
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "🏆 │ Yetkili Katı")))
.then(c => {
let role = message.guild.roles.find("name", "@everyone");
c.overwritePermissions(role, {
CONNECT: true,
});
})

message.guild.createChannel(`⭐│Sohbet. ††`, "voice")
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "🏆 │ Yetkili Katı")))
.then(c => {
let role = message.guild.roles.find("name", "@everyone");
c.overwritePermissions(role, {
CONNECT: true,
});
})


message.guild.createRole({
name: '✯ │ŁØRÐ. &',
color: 'ff0000',
permissions: [
"ADMINISTRATOR",
]
})


message.guild.createRole({
name: '💮│Kâptân. &',
color: '49ff00',
permissions: [
"MANAGE_GUILD",
"MANAGE_ROLES",
"MUTE_MEMBERS",
"DEAFEN_MEMBERS",
"MANAGE_MESSAGES",
"MANAGE_NICKNAMES",
"KICK_MEMBERS"
]
})

message.guild.createRole({
name: '🍁│Yønetici. &',
color: 'ffb400',
permissions: [
"MANAGE_GUILD",
"MANAGE_ROLES",
"MUTE_MEMBERS",
"DEAFEN_MEMBERS",
"MANAGE_MESSAGES",
"MANAGE_NICKNAMES"
]
})

message.guild.createRole({
name: '💐│Łâdiεs. &',
color: 'd300ff',
})

message.guild.createRole({
name: '🏆│Bøys. &',
color: 'ffffff',
})

message.guild.createRole({
name: '🛡 │Authorizεd. Bot. &',
color: '0006ff',
})

message.channel.send("⍫ Gerekli Roller Ve Odalar Kuruldu 🌹")

})

}
});
////////////////////////////////kayıt/////////////////////////////////////
client.on('message', msg => {
  if (msg.author.bot) return;
  const reason = msg.content.split(" ").slice(1).join(" ");
  if (msg.channel.name== '【🚧】sınır-kapısı') { 
    if (!msg.guild.roles.exists("name", "【📍】 Sınır-Kapısı Alım Görevlisi")) return msg.reply(`Bu sunucuda **【📍】 Sınır-Kapısı Alım Görevlisi** isminde bir rol bulamıyorum. \nDestek Sisteminin çalışabilmesi için **【📍】 Sınır-Kapısı Alım Görevlisi** isminde bir rol oluşturulmalı!`).then(m2 => {
            m2.delete(5000)});
      msg.guild.createChannel(`kayıt-${msg.author.id}`, "text").then(c => {
      let role = msg.guild.roles.find("name", "【📍】 Sınır-Kapısı Alım Görevlisi");
      let role2 = msg.guild.roles.find("name", "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`${client.user.username} | Kayıt Sistemi`)
      .addField(`Merhaba ${msg.author.username}!`, `Yetkililer burada seninle ilgilenecektir. \nKayıt olma talebini kapatmak için \`${ayarlar.prefix}kapat\` yazabilirsin.`)
      .addField(`» Kayıt Talebi:`, `${msg.content}`, true)
      .addField(`» Kullanıcı:`, `<@${msg.author.id}>`, true)
      .setFooter(`${client.user.username} | Kayıt Sistemi`)
      .setTimestamp()
      c.send({ embed: embed })
      c.send(`<@${msg.author.id}> Adlı kullanıcı "\`${msg.content}\`" sebebi ile kayıt olma talebi açtı! Lütfen Sınır kapısı alım görevlilerini bekle, @here`)
      msg.delete()
      }).catch(console.error);
    }
  });
  
client.on('message', message => {
if (message.content.toLowerCase().startsWith(prefix + `kapat`)) {
  if (!message.channel.name.startsWith(`kayıt-`)) return message.channel.send(`Bu komut sadece Kayıt olma talebi kanallarında kullanılabilir.`);

  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Kayıt olma talebi Kapatma İşlemi`)
  .setDescription(`Kayıt olma talebini kapatmayı onaylamak için, \n10 saniye içinde \`evet\` yazınız.`)
  .setFooter(`${client.user.username} | Kayıt Sistemi`)
  .setTimestamp()
  message.channel.send({embed})
  .then((m) => {
    message.channel.awaitMessages(response => response.content === 'evet', {
      max: 1,
      time: 10000,
      errors: ['time'],
    })
    .then((collected) => {
        message.channel.delete();
      })
      .catch(() => {
        m.edit('Kayıt olma talebi kapatma isteği zaman aşımına uğradı.').then(m2 => {
            m2.delete();
        }, 3000);
      });
  });
  }
})
////////////////////////////////kayıt/////////////////////////////////////
client.on("channelDelete", async function(channel) {
if(channel.guild.id !== "630259618290860082") return;
    let logs = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'});
    if(logs.entries.first().executor.bot) return;
    channel.guild.member(logs.entries.first().executor).roles.filter(role => role.name !== "@everyone").array().forEach(role => {
              channel.guild.member(logs.entries.first().executor).removeRole(channel.guild.roles.get("🚨 | Admin"))
              channel.guild.member(logs.entries.first().executor).removeRole(channel.guild.roles.get("Destek Ekibi"))
    })
const sChannel = channel.guild.channels.find(c=> c.id ==="630314727045726208")
const cıks = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`${channel.name} adlı Kanal silindi Silen kişinin yetkilerini  çekiyom moruk çıkssss :tiks:`)
.setFooter('Casper sama')
sChannel.send(cıks)
  
channel.guild.owner.send(` **${channel.name}** adlı Kanal silindi Silen  kişinin yetkilerini aldım:tiks:`)
}) 
/////////////////////////////////////
//////////// afk////////////
client.on("message", message => {

//var i = db.fetch(`prefix_${message.guild.id}`)

  
    let afk_kullanici = message.mentions.users.first() || message.author;
    if(message.content.startsWith(ayarlar.prefix+"afk")) return; 
 if (message.author.bot === true) return;
   

     if(message.content.includes(`<@${afk_kullanici.id}>`))
         if(db.has(`afks_${afk_kullanici.id}`)) {
             const afksuan = new Discord.RichEmbed()
                     .setColor("RANDOM")
                     .setDescription(`**${client.users.get(afk_kullanici.id).tag}** adlı kullanıcı şuanda AFK! \n**Sebep:** \n${db.fetch(`afks_${afk_kullanici.id}`)}`)
                     message.channel.send(afksuan)
         }
   
         if(db.has(`afks_${message.author.id}`)) {
                        let user = message.member

             const basarili = new Discord.RichEmbed()

                 .setColor("GREEN")
                 .setDescription("<@"+`${message.author.id}`+">"+"**Başarıyla AFK modundan çıktın <:tik:561940914247827470>**")
                              user.setNickname(message.author.username)

                message.channel.send(basarili)
             db.delete(`afks_${message.author.id}`)
         } 

       });


/////////
client.on('message', message => {
var antiraid = db.fetch(`sunucular.${message.guild.id}.spamkoruma`)
if(!antiraid) return;
if(message.author.bot) return;
message.guild.fetchMember(message.author).then(member => {
if(member.hasPermission('BAN_MEMBERS')) return;
var b = []
var aut = []
setTimeout(() => {
message.channel.fetchMessages({ limit: 10 }).then(m => {
m.forEach(a => {
if(m.filter(v => v.content === a.content).size > m.size / 2) {
message.guild.fetchMember(m.author).then(member2 => {
if(member2.hasPermission('BAN_MEMBERS')) return;
b.push(a)
aut.push(a.author)
})}})
if(!b.includes(":warning: | Saldırgan botlar susturulacak.")) { işlem() }
else {}
  
function işlem() {

if(b.length > 5) {
  message.channel.send(':warning: | Saldırgan botlar susturulacak.')
  aut.forEach(a => {
    message.channel.overwritePermissions(a, {
      "SEND_MESSAGES": false
    })
  })
  message.channel.send(client.emojiler.evet + ' | Saldırgan botlar susturuldu.')
} else return;
}
})})})})


client.on("guildMemberAdd", member => {
  var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(14, 'days').fromNow()
   var user = member.user
   x = x.replace("birkaç saniye önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
   var rol = member.guild.roles.get("") ///Cezalı Rol ID'si
   var kayıtsız = member.guild.roles.get("") ///Kayıtsız rolü ID'si
   member.addRole(rol)
member.user.send('Hesabınız 14 günden önce açıldığı için cezalıya atıldınız, yetkililere bildirerek açtırabilirsiniz.')
setTimeout(() => {

        member.removeRole(kayıtsız.id);

}, 1000)


    
   }
        else {

        }  
    });
client.on('messageReactionAdd', (reaction, user) => {
  let message = reaction.message
  if (db.has(`renk_${message.guild.id}`)) {
    let u = db.fetch(`renksiyah_${message.guild.id}`)
    let uh = db.fetch(`renkkırmızı_${message.guild.id}`)
    let uhm = db.fetch(`renkyeşil_${message.guild.id}`)
    let uhn = db.fetch(`renksarı_${message.guild.id}`)
    let uhi = db.fetch(`renkturuncu_${message.guild.id}`)
    let ul = db.fetch(`renkmor_${message.guild.id}`)
    if (reaction.emoji.name == "🖤") {
      reaction.message.guild.members.get(user.id).addRole(u)
    }
    if (reaction.emoji.name == "❤") {
      reaction.message.guild.members.get(user.id).addRole(uh)
    }
    if (reaction.emoji.name == "💚") {
      reaction.message.guild.members.get(user.id).addRole(uhm)
    }
    if (reaction.emoji.name == "💛") {
      reaction.message.guild.members.get(user.id).addRole(uhn)
    }
    if (reaction.emoji.name == "📙") {
      reaction.message.guild.members.get(user.id).addRole(uhi)
    }
    if (reaction.emoji.name == "💜") {
      reaction.message.guild.members.get(user.id).addRole(ul)
    }
  }
});
/////////////////log gelişmis/////


//------------------------------ Ticket ------------------------------\\
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.toLowerCase().startsWith(prefix + `desteksistemi`)) {
    const embed = new Discord.RichEmbed()
    .setAuthor(`CloseWind v2.1`, client.user.avatarURL)
    .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setColor(0x00ffff)
    .setTitle(`Destek sistemi`)
    .setDescription(`Sunucunuzdaki üyler ile özel bir kanalda konuşmanızı/yardım etmenizi sağlar. Nitekim destek talebi sistemi.`)
    .addField(`Ticket Komutları`, `**[${prefix}destekaç]()**: Destek Bildirimi Oluşturur! \n **[${prefix}destekkapat]()**: Ticket kapatır!`)
    message.channel.send({ embed: embed });
  }


if (message.content.toLowerCase().startsWith(prefix + `destekaç`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Destek Ekibi")) return message.channel.send(`Bu Sunucuda '**Destek Ekibi**' rolünü bulamadım bu yüzden ticket açamıyorum \nEğer sunucu sahibisen, Destek Ekibi Rolünü oluşturabilirsin.`);
    if (message.guild.channels.exists("name", "destektalebi-" + message.author.id)) return message.channel.send(`Zaten açık durumda bir ticketin var.`);
    message.guild.createChannel(`ticket-${message.author.tag}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Destek Ekibi");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: destek Kanalın oluşturuldu   , #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `Başarılı bir şekilde destek açıldı .`)
      c.send(`<@${message.author.id}> Adlı kullanıcı  destek talebi açtı! Lütfen Destek Ekibini bekle, @here`)

        .setTimestamp();
        c.send({ embed: embed });
        message.delete();
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `destekkapat`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`Bu komutu kullanamazsın ticket kanalında olman gerekir.`);

    message.channel.send(`Destek Kanalını kapatmaya emin misin? kapatmak için **c;kapat** yazman yeterli.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === 'c;dkapat', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket Kapatma isteğin zaman aşımına uğradı.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}


});

//------------------------------ ticked son ------------------------------\\
////////////////////reklam-kick////////////////////
client.on("message", async message => {
    let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
    let reklamkick = await db.fetch(`reklamkick_${message.guild.id}`)
    let kullanici = message.member;
    if (reklamkick == 'kapali') return;
    if (reklamkick == 'acik') {
        const reklam = ["discord.app", "discord.gg", "invite", "discordapp", "discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
        if (reklam.some(word => message.content.toLowerCase().includes(word))) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                message.delete();
                db.add(`reklamuyari_${message.author.id}`, 1) //uyarı puanı ekleme
                if (uyarisayisi === null) {
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (1/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)                
}
                if (uyarisayisi === 1) {
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (2/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 2) {
                    message.delete();
                    await kullanici.kick({
                        reason: `Reklam kick sistemi`,
                    })
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> 3 adet reklam uyarısı aldığı için kicklendi. Bir kez daha yaparsa banlanacakç`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 3) {
                    message.delete();
                    await kullanici.ban({
                        reason: `Reklam ban sistemi`,
                    })
                    db.delete(`reklamuyari_${message.author.id}`)
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> kick yedikten sonra tekrar devam ettiği için banlandı.`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }

            }
        }
    }
});
/////////////////////////////reklam-kick son////////////////////////////
///////////bot mesaj silici///////
client.on("message", async msg => {
const db = require('quick.db');   
    let i = db.fetch(`otobsilicia_${msg.channel.id+msg.guild.id}`)
      if (i == undefined) {           
          }
        if (i == 'acik') {   
              let kanal = db.fetch(`otobsilici_${msg.channel.id+msg.guild.id}`)

          if (msg.channel.id != kanal.id) {
  if (msg.content.length > 0) {

    if(msg.author.bot === true){
      msg.delete(3000)
    }
  }
          }
        }
       
  
  })
////////////////////bot mesaj silici son//////////////
client.on("guildMemberAdd", async member => {
 let mesaj = await db.fetch(`mesaj_${member.guild.id}`)
let kanal = await db.fetch(`kanal_${member.guild.id}`) 
if(!kanal) return
if(!mesaj) {
client.channels.get(kanal).send(':scroll: '+member.user.tag+' Selam Çok Az Kaldı Kaydını Tamamla Ve Bizimle Sohbete Eriş! `c!Kayıt isim Yaş`')  
  
}
if(mesaj) {
 var mesajs = await db.fetch(`mesaj_${member.guild.id}`).replace("-uye-", `${member.user.tag}`).replace("-uyetag-", `${member.user.username}`) 
 client.channels.get(kanal).send(mesajs) 
//CodEming / Yasin..
}
});
 ///////////////////////////ayarlamalı dm hg/////////////////////////////////
client.on('guildMemberAdd', async member => {
  db.fetch(`hgsistemi_${member.guild.id}`).then(x => {
    if (x == `acik`) {
  db.fetch(`dmmesaj_${member.guild.id}`).then(ozelhosgeldin =>{
  if (!ozelhosgeldin) return;
  member.send(ozelhosgeldin ? ozelhosgeldin.replace('-sunucu-', `${member.guild.name}`) .replace('-kullanıcı-',`${member.user.tag}`) .replace('-id-',`${member.user.id}`) : ``)
  })
    } else if (x == `kapali`) {
      
    }
  })
})

client.on('guildMemberRemove', async member => {
db.fetch(`hgsistemi_${member.guild.id}`).then(x => {
    if (x == `acik`) {
  db.fetch(`dmbbmesaj_${member.guild.id}`).then(ozelgorusuruz =>{
 if (!ozelgorusuruz) return;
  member.send(ozelgorusuruz ? ozelgorusuruz.replace('-sunucu-', `${member.guild.name}`) .replace('-kullanıcı-',`${member.user.tag}`) .replace('-id-',`${member.user.id}`) : ``)

})
    } else if (x == `kapali`) {
      
    }
  })
})
///////////////////////////////ayarlamalı dm hg///////////////////////////////////       
////////////////////server koruma//////////////////////////////////////
client.on('message', msg => {

if(client.ping > 550) {

            let bölgeler = ['singapore', 'eu-central', 'india', 'us-central', 'london',
            'eu-west', 'amsterdam', 'brazil', 'us-west', 'hongkong', 
            'us-south', 'southafrica', 'us-east', 'sydney', 'frankfurt',
            'russia']
           let yenibölge = bölgeler[Math.floor(Math.random() * bölgeler.length)]
           let sChannel = msg.guild.channels.find(c => c.name === "saldırı-koruma")

           sChannel.send(`Sunucunun Pingi Yükseldiğinden Dolayı Bölge Değiştirildi ${yenibölge} `+ client.ping)
           msg.guild.setRegion(yenibölge)
           .then(g => console.log(" bölge:" + g.region))
           .then(g => msg.channel.send("bölge **"+ g.region  + " olarak değişti"))
           .then(msg.reply('bölge değişti')) 
           .catch(console.error);
}});
//////////////////////////server koruma son//////////////////////////////////////////////////

client.login(ayarlar.token);