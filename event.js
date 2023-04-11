// Window 객체의 onload 프로퍼티를 함수로 설정
// 이 함수가 이벤트 핸들러이며 문서를 불러올 떄 호출.
window.onload = function() {
    // <form> 요소를 찾는다
    let form = document.querySelector("form#shipping");
    // 폼을 전송하기 전에 호출될 이벤트 핸들러 함수를 등록한다.
    // isFormValid()는 다른 곳에서 정의했다고 가정.
    form.onsubmit = function(event) { // 사용자가 폼을 전송할 때
        if (!isFormValid(this)) { // 폼 입력이 유효한지 체크
            event.preventDefault(); // 유효하지 않다면 폼 제출을 막는다
        }
    }

}