/*비동기는 순차적으로 될 수도 있고 안 될 수도 있기 때문에
순서대로 작성을 하더라도 비동기는 순서가 보장이 되지 않는다.
순서를 보장 해야 한다면 then() 안에서 실행을 시켜줘야지 실행이 보장이 됩니다.*/ 


const fs = require('fs').promises;

//read a file
fs.readFile('./text.txt', 'utf-8').then((data) => console.log(data)).catch(console.error);

// writing a file
fs.appendFile('./text.txt', 'YO, Dream Coders :) ')//
.then(() => {
  fs.copyFile('./text.txt', './file2.txt').catch(console.error);
})
.catch(console.error);

//copy
// fs.copyFile('./text.txt', './file2.txt').catch(console.error);

// folder
fs.mkdir('sub-folder').catch(console.error);

fs.readdir('./').then(console.log).catch(console.error);

