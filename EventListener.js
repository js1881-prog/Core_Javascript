
// addEventListener의 인자는 3개
// "행동", 실행함수, 캡쳐링
addEventListener("행동", ()=>{} , {
    capture: true,
    once: true, // 한번 호출 된 후 제거
    passive: true // passive: True 는
    // 절대 preventDefault()를 호출하여 기본 동작을 취소하지 않는다
})

// EventListener 삭제, 3번쨰 인자의 true = 캡쳐링 제거
document.removeEventListener("mouseup", handleMouseMove, true);
