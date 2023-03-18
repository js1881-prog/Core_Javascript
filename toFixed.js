let n = 123456.789;
n.toFixed(0) // "123457"
n.toFixed(2) // "123456.79"
n.toFixed(5) // "123456.78900"
n.toExponential(1) // "1.2e+5"
n.toExponential(3) // "1.235e+5"
console.log(n.toFixed(0))
console.log(n.toFixed(2))
console.log(n.toFixed(5))
console.log(n.toExponential(1))
console.log(n.toExponential(3))
console.log(n.toPrecision(7)) // "123456.8"
// toPrecision = 지정하는 유효 숫자에 따라 숫자를 문자열로 변환

