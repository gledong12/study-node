const fs = require('fs');

// on은 데이터가 발생 할때 마다 실행이 됩니다.
// once는 딱 한번만 처리를 해준다.
const data = [];
fs.createReadStream('./file.txt', {
  highWaterMark: 8, // 64
  // encoding: 'utf-8',
})
.once('data', (chunk) => {
  data.push(chunk);
  console.count(data);
})
.on('end', () => {
  console.log(data.join(''));
})
.on('error', () => {
  console.log(error)
})



// readStream.on('data', chunk => {
//   // console.log(chunk);
//   data.push(chunk);
//   console.count(chunk);
// });

// readStream.on('end', () => {
//   console.log(data.join(''));
// });
// readStream.on('error', error => {
//   console.log(error)
// });