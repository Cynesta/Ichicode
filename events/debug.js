const { Event } = require('klasa');

module.exports = class extends Event {
  constructor(...args) {
    super(...args, {
      name: 'debug',
      enabled: false,
      event: 'debug',
      once: false,
    });
  }

  run(debug) { console.log(debug); }
};  