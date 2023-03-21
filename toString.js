let s = { x: 1, y: 1 }.toString();
console.log(s); // [object Object]

let point = {
    x: 1,
    y: 2,
    toString: function() {
        return `(${this.x}, ${this.y})`;
    }
};
console.log(String(point));
// (1, 2) 문자열로 반환할 때 toString()을 호출
