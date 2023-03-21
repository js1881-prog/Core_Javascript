var obj = {
    logThis: function() {
        console.log(this);
    },
    logThisLater1: function() {
        setTimeout(this.logThis, 500); // => Widnow { ... }
    },
    logThisLater2: function() {
        setTimeout(this.logThis.bind(this), 1000); // bind를 이용해 연결 => obj { logThis: f, ...}
    }
};

obj.logThisLater1();
obj.logThisLater2();