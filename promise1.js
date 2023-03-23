function getJSON(url) {
    return fetch(url).then(response => response.json());
}

function getHighScore() {
    return getJSON("/api/user/profile")
    .then(profile => profile.highScore);
}

