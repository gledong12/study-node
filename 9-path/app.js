const path = require('path');
//운영체제별로 경로를 표현하는 방식이 다르기 때문에 직접 '/' 이렇게 적어주기 보다는 
// path.sep 이런식으로 운영체제별로 작동하도록 만들어 주는 것이 좋다.

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

// basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

//dirname
console.log(path.dirname(__filename));

//extenstion 확장자
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root
parsed.name
const str = path.format(parsed);
console.log(str)

// isAbsolute 절대경로인지 상대경로 인지
console.log('isAbsolute?', path.isAbsolute(__dirname)); // 절대경로이기 때문에 true
console.log('isAbsolute?', path.isAbsolute('../'));  // 상대경로이기 때문에 false


//normalize - 이상한 경로에 대해서 
console.log(path.normalize('./folder///////sub'));

//join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'))