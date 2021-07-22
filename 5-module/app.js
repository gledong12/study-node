// 연관있는 코드는 모아서 모듈로 만든 후 관리
// 다른 모듈에서 사용하기 위해서는 exports를 통해 어떤 것을 노출 할 것인지를 선택해 놔야 한다.

import {increase, getCount} from './counter.js'

increase();
increase();
increase();
console.log(getCount());


