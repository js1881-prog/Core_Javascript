const modules = {};
function require(moduleName) {
    return modules[moduleName];
}

modules["sets.js"] = (function() {
    const exports = {};

    // sets.js 파일 내용이 여기 들어갑니다.
    exports.BitSet = class BitSet { };

    return exports;
}());


modules["stats.js"] = (function() {
    const exports = {};

    // stats.js 파일 내용이 여기 들어갑니다.
    const sum = (x, y) => x + y;
    const square = x => x * x;
    exports.mean = function(data) {};
    exports.stddev = function(data) {};

    return exports;
})

const stats = require("stats.js");
const BitSet = require("sets.js").BitSet;

let s = new BitSet(100);
s.insert(10);
s.insert(20);
s.insert(30);
let average = stats.mean([...s]);
console.log(average);