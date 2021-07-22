// 운영체제
const os = require('os');

console.log(os.EOL === '|n');

// 서버가 동작하는 환경에 대해서 알게 될때
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());