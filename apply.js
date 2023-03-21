// apply => call() 과 기능적으로 동일하나 두번째 인수를 배열로 받는다.
var func = function(a, b, c) {
    console.log(this, a, b , c);
};

func.apply({x : 1}, [4, 5, 6]); // {x: 1} 4 5 6


