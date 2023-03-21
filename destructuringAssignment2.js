function toPolar(x, y) {
    return [Math.sqrt(x*x+y*y), Math.atan2(y, x)];
} 

function toCartesian(r, theta) {
    return [r*Math.cos(theta), r*Math.sin(theta)];
}

let [r, theta] = toPolar(1.0, 1.0);
let [x, y] = toCartesian(r, theta) // [x, y] == [1.0, 1.0]

console.log([x, y]); // 1, 1


// 루프의 분해할당
let o = { x:1, y:2 }; // 순회할 객체
// 객체를 순회하기 위한 Object.entries
// Object.entries(obj) – [키, 값] 쌍을 담은 배열을 반환합니다.
// Object.key()
// Object.value() 존재
for (const [name, value] of Object.entries(o)) {
    console.log(name, value) 
}

let [a, b] = [1]; // x == 1; y == undefined
[x, y] = [1, 2, 3]; // x == 1; y == 2
[, x,,y] = [1, 2, 3, 4] // x == 2; y == 4

let [c, ...d] = [1, 2, 3, 4]; d == [2, 3, 4]
console.log(d);
console.log("cd=" + [c,...d]);
console.log(c);

let [first, ... rest] = "Hello";
console.log(first) // ["H"]
console.log(rest) // ["e", "l", "l", "o"]

// const sin = Math.sin, const cos = Math.cos
const {sin, cos, tan} = Math;
console.log(sin, cos , tan);

// const cosine = Math.cos, tangent = Math.tan
const { cos: cosine, tan: tangent} = Math;

