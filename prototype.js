let o = new Object();
// console.log(o.prototype); 
// new Date()를 생성할 경우 Object.prototype와 
// Date.prototype 프로퍼티를 둘다 상속한다. 
// => 프로토타입 체인

let o1 = Object.create({ x: 1, y: 2});
console.log(o1.x + o1.y); // 3

// {}나 new Object() 가은 일반적인 빈 객체 선언
let o3 = Object.create(Object.prototype);
console.log(o3); // {}

let o4 = { x : "don`t change this value"};
// library.function(Object.create(o4));

let o5 = {};
o5.x = 1;
let p = Object.create(o5);
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();
console.log(q.x + q.y + q.z);


let unitcircle = { r: 1 };
let c = Object.create(unitcircle);
c.x = 1; c.y = 1;
c.r = 2;
console.log(unitcircle.r);
