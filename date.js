let timestamp = Date.now();
let now = new Date();
let ms = now.getTime();
let iso = now.toISOString();


// Timestamp는 1970년 1월 1일부터 지금까지 경과한 시간을 millisecond로 변환한 값
console.log(timestamp); 
console.log(now);
console.log(ms);
console.log(iso);

let a ="123";
let b = [1, 2, 3];
console.log(a.length === b.length); // true
