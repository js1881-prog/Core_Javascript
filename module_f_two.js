const stats = (function() {
    // 모듈에서만 사용하는 비공개 유틸리티 함수
    const sum = (x, y) => x + y;
    const square = x => x * x;

    // 내보낼 공개 함수
    function mean(data) {
        return data.reduce(sum)/data.length;
    }

    // 내보낼 공개 함수
    function stddev(data) {
        let m = mean(data);
        return Math.sqrt(
            data
            .map(x => x - m)
            .map(square)
            .reduce(sum) / (data.length-1)
        );
    }
    console.log(mean, stddev);
    return { mean, stddev };
})();


