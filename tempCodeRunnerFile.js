
bindTest(); // undefined 출력

var bindTest2 = bindTest.bind(obj); // bindTest 함수에 obj 객체를 bind

bindTest2(); // o