const EventEmiiter = require('events');
const emitter = new EventEmiiter();
const callback1 = (args)=>{
  console.log('first callback - ', args);
}

emitter.on('ellie', callback1);

emitter.on('ellie', (args) => {
  console.log('second callback - ', args);
});

emitter.emit('ellie', {message: 1});
emitter.emit('ellie', {message: 2});
emitter.removeAllListeners();
emitter.emit('ellie', {message: 3});