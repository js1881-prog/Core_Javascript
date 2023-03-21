// length를 가지고 있는 유사배열
var obj = {
    0: "a",
    1: "b",
    2: "c",
    length: 3
}

console.log(obj);

Array.prototype.push.call(obj, 'd');

console.log(obj); // { '0': 'a', '1': 'b', '2': 'c', '3': 'd', length: 4 }

let arr = Array.prototype.slice.call(obj);
console.log(arr); // [ 'a', 'b', 'c', 'd' ]

