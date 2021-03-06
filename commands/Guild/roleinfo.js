const { Command, Timestamp } = require('klasa');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: 'roleinfo',
      enabled: true,
      runIn: ['text'],
      cooldown: 2,
      bucket: 1,
      aliases: [],
      permLevel: 5,
      botPerms: [],
      requiredConfigs: [],
      description: 'Fetches role permissions and info.',
      quotedStringSupport: true,
      usage: '[role:role] [value:str]',
      usageDelim: ' ',
      extendedHelp: null,
    });
    this.perms = {
      ADMINISTRATOR: 'Administrator',
      VIEW_AUDIT_LOG: 'View Audit Log',
      MANAGE_GUILD: 'Manage Server',
      MANAGE_ROLES: 'Manage Roles',
      MANAGE_CHANNELS: 'Manage Channels',
      KICK_MEMBERS: 'Kick Members',
      BAN_MEMBERS: 'Ban Members',
      CREATE_INSTANT_INVITE: 'Create Instant Invite',
      CHANGE_NICKNAME: 'Change Nickname',
      MANAGE_NICKNAMES: 'Manage Nicknames',
      MANAGE_EMOJIS: 'Manage Emojis',
      MANAGE_WEBHOOKS: 'Manage Webhooks',
      VIEW_CHANNEL: 'Read Text Channels and See Voice Channels',
      SEND_MESSAGES: 'Send Messages',
      SEND_TTS_MESSAGES: 'Send TTS Messages',
      MANAGE_MESSAGES: 'Manage Messages',
      EMBED_LINKS: 'Embed Links',
      ATTACH_FILES: 'Attach Files',
      READ_MESSAGE_HISTORY: 'Read Message History',
      MENTION_EVERYONE: 'Mention Everyone',
      USE_EXTERNAL_EMOJIS: 'Use External Emojis',
      ADD_REACTIONS: 'Add Reactions',
      CONNECT: 'Connect',
      SPEAK: 'Speak',
      MUTE_MEMBERS: 'Mute Members',
      DEAFEN_MEMBERS: 'Deafen Members',
      MOVE_MEMBERS: 'Move Members',
      USE_VAD: 'Use Voice Activity',
    };
    this.timestamp = new Timestamp('MMMM dd YYYY');
  }

  async run(msg, [role, ...value]) {
    if (value) role = msg.guild.roles.find('name', value.length > 0 ? value : value.join(' '));
    else return msg.send(`I cannot find \`${value}\``);
    console.log(msg.guild.roles.find('name', value.length > 0 ? value : value.join(' ')));
    const allPermissions = Object.entries(role.permissions.serialize()).filter(perm => perm[1]).map(([perm]) => this.perms[perm]).join(' | ');
    const roleInfo = new this.client.methods.Embed()
      .setColor(role.hexColor || 0xFFFFFF)
      .addField('❯ Name', role.name, true)
      .addField('❯ ID', role.id, true)
      .addField('❯ Color', role.hexColor || 'None', true)
      .addField('❯ Creation Date', this.timestamp.display(role.createdAt), true)
      .addField('❯ Hoisted', role.hoist ? 'Yes' : 'No', true)
      .addField('❯ Raw Position', role.rawPossition, true)
      .addField('❯ Mentionable', role.mentionable ? 'Yes' : 'No', true)
      .addField('❯ Permissions', allPermissions);
    return msg.sendEmbed(roleInfo);
  }
};