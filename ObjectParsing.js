// 문자열 선호 알고리즘
// 1. toString() 시도
// 2. toString() 이 object를 반환 => valueOf() 시도
// 3. valueOf()도 기본값이 존재하지 않으면 TypeError
// valueOf => 객체의 기본값 반환, 객체는 주로 상속관계이므로 valueOf()는


// 숫자 선호 알고리즘
// 문자열 선호 알고리즘과 달리 valueOf()메소드 부터 시도

// 선호 없음 알고리즘
// 객체에 따라 다르게 알고리즘을 사용.
