const a = {
    a: 1,
    b: 2
}

function greet(name, age) {
    console.log(this);
    console.log(`안녕하세요, ${name}씨! ${age}살이시군요.`);
}

greet.apply(a, ['철수', 25, 1, 2, 3]);

greet.call(a, "철수", 25);

greet.bind(a, "철수", 25)();