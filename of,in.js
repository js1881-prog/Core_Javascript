let data = [1, 2, 3, 4, 5, 6, 7];
let object = {
    name : "kms",
    age: 29
}

// of => 배열의 반복에서 사용
for (let datum of data) console.log(datum);
// in => 객체의 반복에서 사용
for (let property in object) console.log(property);