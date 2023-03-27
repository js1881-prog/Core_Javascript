function fetchSequentially(urls) {
    // URL 바디를 가져와서 여기 저장합니다.
    const bodies = [];

    // 이 함수가 반환하는 프라미스는 바디 하나를 가져옵니다.
    function fetchOne(url) {
        return fetch(url)
        .then(response => response.text())
        .then(body => {
            // 바디를 배열로 저장하고 의도적으로 반환 값을 생략합니다.
            // (undefined를 반환합니다.)
            bodies.push(body);
        });
    }

    // 즉시 undefined로 이행되는 프라미스를 시작합니다.
    let p = Promise.resolve(undefined);

    // 원하는 URL을 순회하면서 길이가 정해지지 않은 프라미스 체인을 만들고
    // 체인 각 단계에서 URL을 하나씩 가져옵니다.
    for (url of urls) {
        p = p.then(() => fetchOne(url));
    }

    // 체인의 마지막 프라미스가 이행되면 bodies 배열도 준비됩니다.
    // bodies 배열을 처리할 프라미스를 반환합니다.
    // 에러가 호출자에게 전달되길 원하므로 에러 핸들러는 만들지 않았습니다.
    return p.then(() => bodies);
}

fetchSequentially("http://example.com/movies.json");