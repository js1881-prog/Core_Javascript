/* 
/^HTML/ => 문자열의 시작 부분에 있는 H T M L 과 일치
/[1-9][0-9]* => 0이 아닌 숫자가 하나 있어야 하고 그 뒤의 숫자는 제한 X
/\bjavascript\b/i => javascript가 한 단어 들어가야 하고 대소문자를 구분하지 아니함.

*/

let text = "testing: 1, 2, 3";
let pattern = /\d+/g; // d = digit(숫자), + 바로 앞에있는 문자나 문자 클래스가 반복,  g = 전역검사
console.log(pattern.test(text)); // true, 일치하는 reg타입
console.log(text.search(pattern)); // 9, 첫번째로 일치하는 부분의 위치
console.log(text.match(pattern)); // ["1", "2", "3"] 일치하는 부분이 모두 포함된 배열
console.log(text.replace(pattern, "#")); // testing: #, #, #
console.log(text.split(/\D+/)); //["""", "1", "2", "3"] , 숫자가 아닌것에서 나눕니다.

