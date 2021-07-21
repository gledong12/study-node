console.log('logging....');
console.clear();

// log level - 베포시에 심각성 확인 필요
console.log('log');      // 개발
console.info('info');    // 정보
console.warn('warn');    // 경보
console.error('error');  // 에러

// assert 참이 아닌 경우에만 로그 출력
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

// print object
const student = {name: 'ellie', age: 20, company: {name: 'AC'}};
console.log(student)
console.table(student)
console.dir(student, {showHidden: true, colors: false.valueOf, depth:2})

// measuring time - 얼마나 시간이 걸리는지 성능 확인시에 사용하면 좋음
console.time('for loop');
for (let i = 0; i<10; i++) {
  i++;
}

console.timeEnd('for loop')

// counting - 내가 작성한 함수가 내가 예상한 횟수 만큼 호출이 되었는지
function a() {
  console.count('a function');
}
a();
console.countReset('a function')
a();

// trace - console을 추적할 수 있다.
function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log('f3');
  console.trace();
}
f1();