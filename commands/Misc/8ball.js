const { Command } = require('klasa');
const figletAsync = require('util').promisify(require('figlet'));

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: '8ball',
      enabled: true,
      runIn: ['text'],
      cooldown: 2,
      bucket: 1,
      aliases: ['8', 'question'],
      permLevel: 0,
      botPerms: [],
      requiredConfigs: [],
      description: 'Does what the toy does.',
      quotedStringSupport: true,
      usage: '<question:str>',
      usageDelim: '',
      extendedHelp: 'No extended help available.',
    });
  }

  async run(msg, [quest]) {
    return msg.reply(`🎱 ${answers[Math.floor(Math.random() * answers.length)]}`);
  }
};

const answers = [
	'Maybe.',
	'Certainly not.',
	'I hope so.',
	'Not in your wildest dreams.',
	'There is a good chance.',
	'Quite likely.',
	'I think so.',
	'I hope not.',
	'I hope so.',
	'Never!',
	'Pfft.',
	'Sorry, bucko.',
	'Hell, yes.',
	'Hell to the no.',
	'The future is bleak.',
	'The future is uncertain.',
	'I would rather not say.',
	'Who cares?',
	'Possibly.',
	'Never, ever, ever.',
	'There is a small chance.',
	'Yes!',
	'lol no.',
	'There is a high probability.',
	'What difference does it makes?',
	'Not my problem.',
	'Ask someone else.'
];