const { Monitor } = require('klasa');

module.exports = class extends Monitor {
  constructor(...args) {
    super(...args, {
      name: 'rainbow',
      enabled: true,
      ignoreBots: false,
      ignoreSelf: false,
      ignoreOthers: false,
      ignoreEdits: true,
    });
  }

  async run(msg) {
    if (msg.channel.type !== 'text' || !msg.content || !msg.guild.configs.rainbowMonitor || !msg.guild.configs.rainbowRole) return;
    if (Math.floor(Math.random() * 6) !== 0) return;
    await msg.guild.roles.find('id', msg.guild.configs.rainbowRole.id).setColor('#'+(Math.random()*0xFFFFFF<<0).toString(16));
  }
};