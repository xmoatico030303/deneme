const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('message', reqEvent('message'));
  client.on('guildMemberAdd', reqEvent('5-otoTag'));
  client.on('guildMemberAdd', reqEvent('giriş'));
  client.on('guildMemberRemove', reqEvent('çıkış'));

};
