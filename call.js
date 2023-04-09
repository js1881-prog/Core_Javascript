var func = function(a, b, c) {
    console.log(this, a, b, c);
};

func(1, 2, 3); // Window{ ... } 1 2 3
console.log(func.call({x: 1}, 4, 5, 6));
