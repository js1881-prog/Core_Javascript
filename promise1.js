function getJSON(url) {
    return fetch(url).then(response => response.json());
}

function getHighScore() {
    return getJSON("/api/user/profile")
    .then(profile => profile.highScore);
}

function printWithDelay(print, timeout) {
  //2.`setTimeout`을 이용해서 비동기 처리 함수를 완성합니다.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async callback");
        resolve();
    }, 3000)
  });
}

