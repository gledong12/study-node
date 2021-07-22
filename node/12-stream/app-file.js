const fs = require('fs');

const beforeMem = process.memoryUsage().res;     // 메모리의 상태를 저장 다해놓은 후
fs.readFile('./file.txt', (_, data) => {         // 파일을 읽는다.
  fs.writeFile('./file2.txt', data, () => {});   // 읽은 파일을 file2에다가 저장을 할 것이다.
  // caculate
  const afterMem = process.memoryUsage().res;    
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 /1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`);  // 실제로 메모리 사용에 큰 변화가 있는지 차이점을 MB로 확인
});