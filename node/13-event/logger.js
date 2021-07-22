const EventEmiiter = require('events');

// Eventemiiter는 logger를 상속해서 사용이 가능하다.
class Logger extends EventEmiiter {
  log (callback) {
    this.emit('log', 'started...');
    callback();
    this.emit('log', 'ended!');
  }
}


module.exports.Logger = Logger;