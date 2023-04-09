let o = { x: undefined };
o.x !== undefined; // false
o.y !== undefined; // faslse
console.log("x" in o) // true
console.log("y" in o) // false
delete o.x;
console.log("x" in o) // false

let o1 = { x: 1, y: 2, z: 3};
console.log(o1.propertyIsEnumerable("toString")); // false toString() 열거 불가
for (let p in o1) {
    console.log(p);
} // x, y, z는 출력하지만 toString은 미출력

let target = {x: 1}, source = {y: 2, z: 3};
for (let key of Object.keys(source)) {
    target[key] = source[key];
}
console.log(target); // {x: 1, y: 2, z: 3}


let o2 = Object.assign({}, o, o1);
console.log(o2);
