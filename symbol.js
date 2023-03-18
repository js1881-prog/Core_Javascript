let strname = "string name"; // 프로퍼티 이름에 문자열을 썼습니다.
let symname = Symbol("propname"); // 프로퍼티 이름에 심벌을 썼습니다.
console.log(typeof(strname)); // "string" => strname은 문자열
console.log(typeof(symname)); // "symbol" => symname은 심벌
let o = {};
o[strname] = 1;
o[symname] = 2;
console.log(o[strname]);
console.log(o[symname]);


let s = Symbol.for("shared");
let t = Symbol.for("shared");
console.log(s === t); // true
console.log(s.toString()); // "Symbol(shared);
console.log(Symbol.keyFor(t)); // "shared";
