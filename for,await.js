const fs = require("fs");

async function parseFile(filename) {
    let stream = fs.createReadStream(filename, {
        encoding: "utf-8"});
    for await (let chunk of stream) {
        parseChunk(chunk); //parseChunk는 다른곳에서 만들었다고 가정
    }
}


const promises = urls.map(url => fetch(url));

for (const promise of promises) {
    response = await promise;
    handle(response);
}
// async 위에서만 작동


// 위 이터레이터는 프라미스를 반환하므로 아래와 같다
for await(const response of promises) {
    handle(response);
}
// 위 아래 둘다 async 위에서만 작동


// for (const promise of promises) {
//     response = await promise;
//     handle(response);
// }

// for await(const response of promises) {
//     handle(response);
// } ==> 둘다 async 위에서만 작동
