(() => {
    console.log("Hello");
}
)()

class a {
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

let b = new a(1,2,3);

function c(...x) {
    return x
}

console.log(c(b));