// 객체를 숫자로 변환하려할떄 주로 사용
let point = {
    x: 3,
    y: 4,
    valueOf: function() {
        return Math.hypot(this.x, this.y);
    }
};
console.log(Number(point)); // 5 위에 메소드 없으면 NaN
// 숫자로 변환