//  고정된 사이즈의 메모리 형태이고, 숫자의 배열이다
// Fixed-size chuck of memory, array of integers, byte of data

const fs = require('fs');
const buf = Buffer.from('Hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString()); // 기본값은 utf-8

// create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // fast
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3)
console.log(buf2.toString());
console.log(buf3.toString());

//concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());