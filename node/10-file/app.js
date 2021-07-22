// file 모듈
const fs = require('fs');

// 3
// rename(..., callback(error, data)) 비동기 함수이다.
// try {renameSync(...)} catch(e) - 사용하지 않는 것이 좋다.
//promise.renam().then().catch(0)
// rename이랑 promise 형태로 사용하는 것이 더욱 좋다.

try {
  fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
  console.log(error);
}

fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error);
});
console.log('hello')

fs.promises.rename('./text2.txt', './text2-next.txt').then(() => console.log('Done!')).catch(console.error);