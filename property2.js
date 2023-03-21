const PROPERTY_NAME = "p1";
function computePropertyName() {
    return "p" + 2;
}
let o = {};
o[PROPERTY_NAME] = 1;
o[computePropertyName()] = 2;
console.log(o);

// ========= same ======
const PROPERTY_NAME2 = "p1";
function computePropertyName2() {
    return "p" + 2;
}
let p = {
    [PROPERTY_NAME2]: 1,
    [computePropertyName2()] : 2
};

console.log(p.p1 + p.p2); // 3

