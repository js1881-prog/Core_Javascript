let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
];

points.dist = function() {
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return (a*a) + (b*b);
}

console.log(points.dist());

var obj = {
    name: 'shpark'
};

function bindTest() {
    console.log(this.name);
}

bindTest(); // undefined 출력

var bindTest2 = bindTest.bind(obj); // bindTest 함수에 obj 객체를 bind

bindTest2(); // obj의 name 값인 shpark 이 표출

console.log(obj);