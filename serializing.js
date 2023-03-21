let o = {x: 1,
    y: {
    z: [false, null, ""]
    }
};
let s = JSON.stringify(o);
console.log(s); // '{"x":1,"y":{"z":[false,null,""]}}'
let p = JSON.parse(s);
console.log(p); // { x: 1, y: { z: [ false, null, '' ] } }

