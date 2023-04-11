const b = {
    a: 1,
    b: 2
}

function outerFunction() {
    var outerVar = `Hello, `; // 외부 스코프의 변수
    
    function innerFunction(name) {
        console.log(outerVar + name);
      // 내부 스코프의 함수
    }  
    
    return innerFunction; // 내부 함수를 반환
}
  
var greet = outerFunction(); // outerFunction() 호출하여 innerFunction을 반환받음
// greet("철수"); // innerFunction이 외부 스코프의 변수를 참조하여 "Hello, 철수" 출력


greet.call(b, "철수");